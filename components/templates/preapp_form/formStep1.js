import Image from "next/image";

import {useState} from "react";

import Card from "@material-ui/core/Card";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import DateRangeIcon from "@material-ui/icons/DateRange";

import styles from "../../../styles/formStep1.module.css";


const customLoader = ({ src }) => {
  return `https://res.cloudinary.com/hellodewa/image/upload/v1624394998/paystaq-shopping-credit-preappform-frontend-demo/images/${src}`;
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(0),
    minWidth: 580,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const FormStep1 = () => {

  const classes = useStyles();
  const [date, setDate] = useState("");

  const handleChange = (event) => {
    setDate(event.target.value);
  };


  return (
    <div className="form-layout" id={styles.formAdjust}>
      <h4 className="form-section-title">What Do You Do?</h4>

      <div className="row form-section first-section">
        <div className={`col-xl-4 col-lg-4 col-sm-12 col-md-12 col-xs-12 ${styles.employmentOption}`}>
          <Card className="blur-card-borders section-input-card">
            <CardContent>
              <Image src="paid_employment_q1jmxa.jpg" loader={customLoader} layout="responsive" width={400} height={400} alt="" />
              <input type="radio" id="employment" className={styles.employmentSelect} name="employment" value="paid_employment" />
            </CardContent>
          </Card>
          <p>Paid Employment</p>
        </div>
        <div className={`col-xl-4 col-lg-4 col-sm-12 col-md-12 col-xs-12 ${styles.employmentOption}`}>
          <Card className="blur-card-borders section-input-card">
            <CardContent>
              <Image src="self_employed_freelance_qgo8lz.jpg" loader={customLoader} layout="responsive" width={400} height={400} alt="" />
              <input type="radio" id="employment" className={styles.employmentSelect} name="employment" value="self_employed_freelance" />
            </CardContent>
          </Card>
          <p>Self Employed/ Freelance</p>
        </div>
        <div className={`col-xl-4 col-lg-4 col-sm-12 col-md-12 col-xs-12 ${styles.employmentOption}`}>
          <Card className="blur-card-borders section-input-card">
            <CardContent>
              <Image src="corporate_organization_q1ihy9.jpg" loader={customLoader} layout="responsive" width={400} height={400} alt="" />
              <input type="radio" id="employment" className={styles.employmentSelect} name="employment" value="corporate_organization" />
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
        <p>When is your next salary date?</p>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Select pay Date</InputLabel>
          <Select className="form-input blur-borders" labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" value={date} onChange={handleChange} label=""
           startAdornment={
            <InputAdornment position="start">
              <DateRangeIcon />
            </InputAdornment>}>
            <MenuItem value="">Select pay Date</MenuItem>
            <MenuItem value={"jan"}>January</MenuItem>
            <MenuItem value={"feb"}>February</MenuItem>
            <MenuItem value={"mar"}>March</MenuItem>
            <MenuItem value={"apr"}>April</MenuItem>
            <MenuItem value={"may"}>May</MenuItem>
            <MenuItem value={"jun"}>June</MenuItem>
            <MenuItem value={"jul"}>July</MenuItem>
            <MenuItem value={"aug"}>August</MenuItem>
            <MenuItem value={"sep"}>September</MenuItem>
            <MenuItem value={"oct"}>October</MenuItem>
            <MenuItem value={"nov"}>November</MenuItem>
            <MenuItem value={"dec"}>December</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="form-section">
        <p>Do you have any existing loan(s)?</p>
        <div className="row form-input blur-borders">
          <div className="col-xl-6  col-lg-6 col-sm-12 col-md-12 col-xs-12" id={styles.radioLeft}>
            <input type="radio" id="existing_loans" name="existing_loans" value="yes" />
            <label className={styles.radioLabel} htmlFor="existing_loans">
              Yes
            </label>
          </div>
          <div className="col-xl-6  col-lg-6 col-sm-12 col-md-12 col-xs-12" id={styles.radioRight}>
            <input type="radio" id="existing_loans" name="existing_loans" value="no" />
            <label className={styles.radioLabel} htmlFor="existing_loans">
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
