import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Layout from '../components/layouts/layout';
import MainTemplate from '../components/templates/main';

const Home = () => {
  return (
    <Layout>
      <MainTemplate />
    </Layout>
  );
}

export default Home;
