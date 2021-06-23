import Image from "next/image";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import styles from "../../../styles/formStep1.module.css";


const customLoader = ({ src }) => {
  return `https://res.cloudinary.com/hellodewa/image/upload/v1624394998/paystaq-shopping-credit-preappform-frontend-demo/images/${src}`;
};

const FormStep1 = () => {

  return (
    <div className="form-layout" id={styles.formAdjust}>
      <h4 className="form-section-title">What Do You Do?</h4>

      <div className="row form-section first-section">
        <div className={`col-xl-4 col-lg-4 col-sm-12 col-md-12 col-xs-12 ${styles.employmentOption}`}>
          <Card className="blur-card-borders section-input-card">
            <CardContent>
              <Image src="paid_employment_q1jmxa.jpg" loader={customLoader} layout="responsive" width={400} height={400} alt="" />
            </CardContent>
          </Card>
          <p>Paid Employment</p>
        </div>
        <div className={`col-xl-4 col-lg-4 col-sm-12 col-md-12 col-xs-12 ${styles.employmentOption}`}>
          <Card className="blur-card-borders section-input-card">
            <CardContent>
              <Image src="self_employed_freelance_qgo8lz.jpg" loader={customLoader} layout="responsive" width={400} height={400} alt="" />
              <input type="radio" id="self_employed_freelance" className={styles.employmentSelect} name="self_employed_freelance" value="self_employed_freelance" />
            </CardContent>
          </Card>
          <p>Self Employed/ Freelance</p>
        </div>
        <div className={`col-xl-4 col-lg-4 col-sm-12 col-md-12 col-xs-12 ${styles.employmentOption}`}>
          <Card className="blur-card-borders section-input-card">
            <CardContent>
              <Image src="corporate_organization_q1ihy9.jpg" loader={customLoader} layout="responsive" width={400} height={400} alt="" />
              <input type="radio" id="corporate_organization" className={styles.employmentSelect} name="corporate_organization" value="corporate_organization" />
            </CardContent>
          </Card>
          <p>Corporate Organization</p>
        </div>
      </div>

      <div className="form-section">
        <p>How much do you get paid monthly?</p>
        <div id={styles.currencySection}>
          <span id={styles.currency}>₦</span>
          <input type="text" className="form-input form-input-currency blur-borders" />
        </div>
      </div>

      <div className="form-section">
        <p>How much do you get paid monthly?</p>
        <input
          type="date"
          className="form-input  blur-borders"
          title="Select pay date"
          onChange={(e) => {
            setDownpayment(e.target.value);
          }}
        />
      </div>

      <div className="form-section">
        <p>Do you have any existing loan(s)?</p>
        <div className="row form-input blur-borders">
          <div className="col-xl-6  col-lg-6 col-sm-12 col-md-12 col-xs-12" id={styles.radioLeft}>
            <input type="radio" id="yes" name="has_loan" value="yes" />
            <label className={styles.radioLabel} htmlFor="yes">
              Yes
            </label>
          </div>
          <div className="col-xl-6  col-lg-6 col-sm-12 col-md-12 col-xs-12" id={styles.radioRight}>
            <input type="radio" id="no" name="does_not_have_loan" value="no" />
            <label className={styles.radioLabel} htmlFor="no" name="does_not_have_loan" value="no">
              {" "}
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormStep1;
