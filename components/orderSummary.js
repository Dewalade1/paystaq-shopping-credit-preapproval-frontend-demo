import Image from 'next/image';

import styles from "../styles/orderSummary.module.css";

import SummaryData from "../data/summaryData";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const customLoader = ({ src }) => {
  return `https://res.cloudinary.com/hellodewa/image/upload/${src}`;
};

const OrderSummary = () => {
  return (
    <div id={styles.orderSummaryLayout}>
      <p id={styles.orderSummaryTitle}>ORDER SUMMARY</p>
      <Card className={`${styles.orderCard} ${styles.cardBoxShadow}`}>
        <CardContent>
          <div className={`row ${styles.cartItem}`} key={0}>
            <div className={`col-xl-3 ${styles.cartItemImage}  ${styles.blurBorders}`}>
              <Image src={SummaryData.cartItems[0].imageUrl} loader={customLoader} layout="fill" alt="" className={styles.cartItemImage} />
            </div>
            <div className="col-xl-9">
              <div>{SummaryData.cartItems[0].name}</div>
              <div> ₦{SummaryData.cartItems[0].price}</div>
              <div>Qty: {SummaryData.cartItems[0].qty}</div>
            </div>
          </div>
          <div className={`row ${styles.cartItem}`} key={1}>
            <div className={`col-xl-3 ${styles.cartItemImage} ${styles.blurBorders}`}>
              <Image src={SummaryData.cartItems[1].imageUrl} loader={customLoader} layout="fill" alt="" className={styles.cartItemImage} />
            </div>
            <div className="col-xl-9">
              <div>{SummaryData.cartItems[1].name}</div>
              <div> ₦{SummaryData.cartItems[1].price}</div>
              <div>Qty: {SummaryData.cartItems[1].qty}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className={`${styles.orderCard} ${styles.cardBoxShadow}`}>
        <CardContent className="row">
          <div className="col-xl-6" id={styles.totalText}>
            Total Cart Value:
          </div>
          <div className="col-xl-6" id={styles.totalPrice}>
            {" "}
            ₦52,100
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderSummary;
