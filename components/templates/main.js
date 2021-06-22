import React from "react";
import {useImmerReducer} from "use-immer";

import StateContext from '../../contexts/stateContext';
import DispatchContext from "../../contexts/DispatchContext";

import Banner from "../banner";
import Layout from "../layouts/layout";
import PreappForm from "../preappForm";
import OrderSummary from "../orderSummary";

const MainTemplate = () => {

  const initState = {
    formState: 'FIRST',
    formData: '',
  };

  const theReducer = (draft, action) => {
    switch (action.type) {
      case "MOVE_TO_FORM_STEP_1":
        draft.initState.formState = 'FIRST';
        break;
      case "MOVE_TO_FORM_STEP_2":
        draft.initState.formState = "SECOND";
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
