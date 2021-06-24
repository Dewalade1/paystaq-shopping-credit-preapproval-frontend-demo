import {useState} from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import styles from "../../../styles/formStep2.module.css";


const FormStep2 = () => {

  const [downPayment, setDownPayment] = useState('0');

  return (
    <div className="form-layout">
      <div>
        <h4 className="form-section-title">Choose your Plan</h4>
        <div className="row form-section first-section">
          <div className="col-xl-2 col-lg-2 col-sm-2 col-md-4 col-xs-2 card-container">
                <Card>
                  <CardContent className={`${styles.blurCardBorders} ${styles.sectionInputCard} `} id={styles.redBorderTop}>
                    <input type="checkbox" id={styles.aggressive}   name="employment" value="paid_employement"/>
                    <label class="btn" for={styles.aggressive}>
                      <div className={styles.planContent}>
                        <div className="small-text">Aggressive</div>
                        <div className="xxx-large-text">1</div>
                        <div className="small-text">month</div>
                      </div>
                    </label>
                  </CardContent>
                </Card>
          </div>
          <div className="col-xl-2 col-lg-2 col-sm-2 col-md-4 col-xs-2 card-container">
            <Card>
              <CardContent className={`${styles.blurCardBorders} ${styles.sectionInputCard} `} id={styles.pinkBorderTop}>
              <input type="checkbox" id={styles.stretching}   name="employment" value="paid_employement"/>
                <label class="btn" for={styles.stretching}>
                  <div className={styles.planContent}>
                    <div className="small-text">Stretching</div>
                    <div className="xxx-large-text">2</div>
                    <div className="small-text">months</div>
                  </div>
                </label>
              </CardContent>
            </Card>
          </div>
          <div className="col-xl-2 col-lg-2 col-sm-2 col-md-4 col-xs-2 card-container">
            <Card>
              <CardContent className={`${styles.blurCardBorders} ${styles.sectionInputCard} `} id={styles.purpleBorderTop}>
              <input type="checkbox" id={styles.focused}   name="employment" value="paid_employement"/>
                <label class="btn" for={styles.focused}>
                  <div className={styles.planContent}>
                    <div className="small-text">Focused</div>
                    <div className="xxx-large-text">3</div>
                    <div className="small-text">months</div>
                  </div>
                </label>
              </CardContent>
            </Card>
          </div>
          <div className="col-xl-2 col-lg-2 col-sm-2 col-md-4 col-xs-2 card-container">
            <Card>
              <CardContent className={`${styles.blurCardBorders} ${styles.sectionInputCard} `} id={styles.blueGreenBorderTop}>
              <input type="checkbox" id={styles.casual}   name="employment" value="paid_employement"/>
              <label class="btn" for={styles.casual}>
                <div className={styles.planContent}>
                  <div className="small-text">Casual</div>
                  <div className="xxx-large-text">4</div>
                  <div className="small-text">months</div>
                </div>
              </label>
              </CardContent>
            </Card>
          </div>

          <div className="col-xl-2 col-lg-2 col-sm-2 col-md-4 col-xs-2 card-container">
              <Card>
                <CardContent className={`${styles.blurCardBorders} ${styles.sectionInputCard} `} id={styles.orangeBorderTop}>
                <input type="checkbox" id={styles.mild}   name="employment" value="paid_employement"/>
                <label class="btn" for={styles.mild}>
                  <div className={styles.planContent}>
                    <div className="small-text">Mild</div>
                    <div className="xxx-large-text">5</div>
                    <div className="small-text">months</div>
                  </div>
                </label>
              </CardContent>
            </Card>
          </div>

          <div className="col-xl-2 col-lg-2 col-sm-2 col-md-4 col-xs-2 card-container">
            <Card>
              <CardContent className={`${styles.blurCardBorders} ${styles.sectionInputCard} `} id={styles.brightGreenBorderTop}>
              <input type="checkbox" id={styles.gentle}   name="employment" value="paid_employement"/>
                <label class="btn" for={styles.gentle}>
                  <div className={styles.planContent}>
                    <div className="small-text">Gentle</div>
                    <div className="xxx-large-text">6</div>
                    <div className="small-text">months</div>
                  </div>
                </label>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div id={styles.formSection}>
        <h4 className="form-section-title">Payment Breakdown</h4>
        <Card className={`${styles.sectionInputCard} ${styles.blurCardBorders}`} id={styles.paymentCard}>
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-4">
              <div id={styles.purposeDiv}>
                <div> Shopping Credit </div>
                <div> Down Payment</div>
                <div> Monthly Installment</div>
                <div> Tenure </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div id={styles.amountDiv}>
                <div>₦45,000</div>
                <div>₦{downPayment}</div>
                <div>₦25,000</div>
                <div>1 month</div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4" id={styles.customizeDownPayment}>
              <p id={styles.customizeDownPaymentTitle}>
                Customize <br /> Down Payment
              </p>
              <div id={styles.customizeDownPaymentSection}>
                <span id={styles.customizeDownPaymentCurrency}>₦</span>
                <input type="text" id={styles.customizeDownPaymentInput} onChange={(e) => setDownPayment(e.target.value)} />
              </div>
              <button type="button" className="btn btn-outline-light" id={styles.updateBreakdownBtn} onClick={(e) => setDownPayment(e.target.value)}>
                Update Breakdown
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FormStep2;
