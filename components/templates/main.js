import Axios from "axios";
import {useEffect} from "react";
import {useImmerReducer} from "use-immer";

import StateContext from '../contexts/stateContext';
import DispatchContext from "../contexts/dispatchContext";

import Banner from "../banner";
import Layout from "../layouts/layout";
import PreappForm from "../preappForm";
import OrderSummary from "../orderSummary";

Axios.defaults.baseURL = "http://localhost:8080" || process.env.BACKENDURL;


const MainTemplate = () => {

  const initState = {
    formState: 'FIRST',
    formData: {
      employmentStatus: '',
      salary: 0,
      nextSalaryDate: '',
      existingLoans: '',
      shoppingCredit: 0,
      downPayment: 0,
      monthlyInstallment: 0,
      tenure: 0
      },
  };

  function theReducer(draft, action) {
    switch (action.type) {
      case "MOVE_TO_FORM_STEP_1":
        draft.formState = 'FIRST';
        break;

      case "MOVE_TO_FORM_STEP_2":
        draft.formState = "SECOND";
        break;
      case "MOVE_TO_FORM_COMPLETE":
        draft.formState = "COMPLETE";
        break;
      default:
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(theReducer, initState );
  
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Layout>
          <Banner />
          <OrderSummary />
          <PreappForm />
        </Layout>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default MainTemplate;
