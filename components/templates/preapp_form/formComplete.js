import Image from 'next/image';

import styles from '../../../styles/formComplete.module.css';

const customLoader = ({ src }) => {
  return `https://res.cloudinary.com/hellodewa/image/upload/v1624440792/paystaq-shopping-credit-preappform-frontend-demo/images/${src}`;
};


const FormComplete = () => {
    return (
      <div id={styles.formCompleteLayout}>
        <div id={styles.completeImage}>
          <Image loader={customLoader} src="form_complete_nkyfiq.png" alt="" layout="responsive" width={80} height={80} />
        </div>
        <div id={styles.completeInfo}>
          <h1>Thank you!</h1>
          <p>Your application has been recieved</p>
        </div>
      </div>
    );
};

export default FormComplete;