import Head from 'next/head';

const Layout = ({children}) => {
    return(
        <>
        <Head>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </Head>
        <main id="layout">{children}</main>
        </>)
}

export default Layout;