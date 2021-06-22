import { useContext} from "react";

import styles from "../styles/preappForm.module.css";

import StateContext from "../contexts/stateContext";

import EmptyForm from "./templates/preapp_form/emptyForm";
import FormStep1 from "./templates/preapp_form/formStep1";
import FormStep2 from "./templates/preapp_form/formStep2";

const PreappForm = () => {

  const appState = useContext(StateContext);

  return (
    <div id={styles.preApplicationFormLayout}>
      {appState.formState === 'FIRST' ? <FormStep1/>: (appState.formState === 'SECOND') ? <FormStep2/> : <EmptyForm/>}
    </div>
  );
};

export default PreappForm;
