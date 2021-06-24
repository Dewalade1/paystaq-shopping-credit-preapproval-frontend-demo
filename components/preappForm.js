import $ from "jquery";
import Axios from "axios";
import Link from "next/link";
import Script from "next/script";
import {useImmer} from "use-immer";

import { useContext, useEffect } from "react";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import styles from "../styles/preappForm.module.css";

import StateContext from "./contexts/stateContext";
import DispatchContext from "./contexts/dispatchContext";

import NetworkError from "./app/netWorkError";
import FormComplete from "./templates/preapp_form/formComplete";
import FormStep1 from "./templates/preapp_form/formStep1";
import FormStep2 from "./templates/preapp_form/formStep2";

const PreappForm = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const [state, setState] = useImmer({
    isLoading: false,
  });

  const handleBtnClick = () => {
    if (appState.formState === "FIRST") {
      appDispatch({ type: "MOVE_TO_FORM_STEP_2" });
      
    } else if (appState.formState === "SECOND") {
      setState(draft => {
        draft.isLoading = true;
      });

      const cancelSubmitRequest = Axios.CancelToken.source();
      async function submitRequest(e) {
        e.preventDefault();

      try {
        const response = await Axios.post("/login", { username, password });
        if (response.data) {
          setState(draft => {
            draft.isLoading = false;
          });
          console.log(response.data)
        }
      } catch (e) {
        setState(draft => {
          draft.isLoading = false;
        });
          console.log(e)
          return <NetworkError />;
      }
        submitRequest();
        appDispatch({ type: "MOVE_TO_FORM_COMPLETE" });
        return () => cancelSubmitRequest.cancel();
      }
    } else {
      appDispatch({ type: "" });
    }
  };

  const handleBackLinkClick = () => {
    if (appState.formState === "SECOND") {
      appDispatch({ type: "MOVE_TO_FORM_STEP_1" });
    } else if (appState.formState === "COMPLETE") {
      appDispatch({ type: "MOVE_TO_FORM_STEP_2" });
    } else {
      appDispatch({ type: "" });
    }
  };

  return (
    <>
    <div id={styles.preApplicationFormLayout}>
      <div id={styles.formHeader}>
        {appState.formState !== "FIRST" ? (
          <div id={styles.returnLink}>
            <Link href="#">
              <a onClick={handleBackLinkClick}>
                <ArrowBackIcon /> Back
              </a>
            </Link>
          </div>
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
        {appState.formState === "FIRST" ? <FormStep1 /> : appState.formState == "SECOND" ? <FormStep2 /> : <FormComplete />}
        <div>
          {appState.formState !== "COMPLETE" ? (
            <button type="button" className="btn btn-outline-danger form-button" onClick={handleBtnClick}>
              Continue
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>

    <Script type="text/javascript">
      {() => {

        var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
$(".next").click(function () {
  if (animating) return false;
  animating = true;
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = now * 50 + "%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          transform: "scale(" + scale + ")",
          position: "absolute",
        });
        next_fs.css({ left: left, opacity: opacity });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack",
    }
  );
});
$(".previous").click(function () {
  if (animating) return false;
  animating = true;
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  //de-activate current step on progressbar
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = (1 - now) * 50 + "%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({ left: left });
        previous_fs.css({ transform: "scale(" + scale + ")", opacity: opacity });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack",
    }
  );
});
$(".submit").click(function () {
  return false;
});
      }}
    </Script>
    </>
  );
};

export default PreappForm;
