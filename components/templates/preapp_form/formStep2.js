import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import styles from "../../../styles/formStep2.module.css";


const FormStep2 = () => {
  return (
    <div className="form-layout">
      <div>
        <h4 className="form-section-title">Choose your Plan</h4>
        <div className="row form-section first-section">
          <div className="col-xl-2 col-lg-2 col-sm-2 col-md-4 col-xs-2 card-container">
            <Card>
              <CardContent className={`${styles.blurCardBorders} ${styles.sectionInputCard} `} id={styles.redBorderTop}>
                <div className={styles.planContent}>
                  <div className="small-text">Aggressive</div>
                  <div className="xxx-large-text">1</div>
                  <div className="small-text">month</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-xl-2 col-lg-2 col-sm-2 col-md-4 col-xs-2 card-container">
            <Card>
              <CardContent className={`${styles.blurCardBorders} ${styles.sectionInputCard} `} id={styles.pinkBorderTop}>
                <div className={styles.planContent}>
                  <div className="small-text">Stretching</div>
                  <div className="xxx-large-text">2</div>
                  <div className="small-text">month</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-xl-2 col-lg-2 col-sm-2 col-md-4 col-xs-2 card-container">
            <Card>
              <CardContent className={`${styles.blurCardBorders} ${styles.sectionInputCard} `} id={styles.purpleBorderTop}>
                <div className={styles.planContent}>
                  <div className="small-text">Focused</div>
                  <div className="xxx-large-text">3</div>
                  <div className="small-text">month</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-xl-2 col-lg-2 col-sm-2 col-md-4 col-xs-2 card-container">
            <Card>
              <CardContent className={`${styles.blurCardBorders} ${styles.sectionInputCard} `} id={styles.blueGreenBorderTop}>
                <div className={styles.planContent}>
                  <div className="small-text">Casual</div>
                  <div className="xxx-large-text">4</div>
                  <div className="small-text">month</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-xl-2 col-lg-2 col-sm-2 col-md-4 col-xs-2 card-container">
            <Card>
              <CardContent className={`${styles.blurCardBorders} ${styles.sectionInputCard} `} id={styles.orangeBorderTop}>
                <div className={styles.planContent}>
                  <div className="small-text">Mild</div>
                  <div className="xxx-large-text">5</div>
                  <div className="small-text">month</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-xl-2 col-lg-2 col-sm-2 col-md-4 col-xs-2 card-container">
            <Card>
              <CardContent className={`${styles.blurCardBorders} ${styles.sectionInputCard} `} id={styles.brightGreenBorderTop}>
                <div className={styles.planContent}>
                  <div className="small-text">Gentle</div>
                  <div className="xxx-large-text">6</div>
                  <div className="small-text">month</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormStep2;
