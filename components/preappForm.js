import Link from "next/link";
import { useContext } from "react";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import styles from "../styles/preappForm.module.css";

import StateContext from "./contexts/stateContext";
import DispatchContext from "./contexts/dispatchContext";

import FormComplete from "./templates/preapp_form/formComplete";
import FormStep1 from "./templates/preapp_form/formStep1";
import FormStep2 from "./templates/preapp_form/formStep2";

const PreappForm = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const handleBtnClick = () => {
    console.log(appState);
    // appState.formState = "SECOND";
    if (appState.formState === "FIRST") {
      appDispatch({ type: "MOVE_TO_FORM_STEP_2" });
    } else if (appState.formState === "SECOND") {
      appDispatch({ type: "MOVE_TO_FORM_COMPLETE" });
    } else {
      appDispatch({ type: "" });
    }
    console.log(appState);
  };

  return (
    <div id={styles.preApplicationFormLayout}>
      <div>
        {appState.formState !== "FIRST" && appState.formState !== "COMPLETE" ? (
          <Link
            href="#"
            onClick={() => {
              appDispatch({ type: "MOVE_TO_FORM_STEP_1" });
            }}
          >
            <a>Back</a>
          </Link>
        ) : (
          ""
        )}
        <ul id={styles.progressbar}>
          <li className="active"></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        {appState.formState == "FIRST" ? <FormStep1 /> : appState.formState == "SECOND" ? <FormStep2 /> : <FormComplete />}
        <button type="button" className="btn btn-outline-danger form-button" onClick={handleBtnClick}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default PreappForm;
