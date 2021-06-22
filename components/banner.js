import Link from "next/link";

import styles from "../styles/banner.module.css";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Banner = () => {
  return (
    <div id={styles.bannerLayout}>
      <div id={styles.bannerOverlay}></div>
      <div id={styles.bannerContent}>
        <div id={styles.returnLinkContainer}>
          <Link href="#">
            <a id={styles.returnLink}>
              <ArrowBackIcon /> Back to Store
            </a>
          </Link>
        </div>

        <img src="https://res.cloudinary.com/hellodewa/image/upload/v1624359967/paystaq-shopping-credit-preappform-frontend-demo/images/logo-no-bkgd_wjdjof.png" alt="" id={styles.bannerLogo} />

        <ul>
          <li>Get pre-approved instantly.</li>
          <li>Spread payment for up to six months.</li>
          <li>Provide Some basic information to get started.</li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
