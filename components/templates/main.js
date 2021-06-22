import React from 'react';

import Banner from "../banner";
import Layout from "../layouts/layout";
import PreappForm from "../preappForm";
import OrderSummary from "../orderSummary";

const MainTemplate = () => {
  return (
    <Layout>
      <Banner />
      <OrderSummary />
      <PreappForm />
    </Layout>
  );
};

export default MainTemplate;
