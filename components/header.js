import Head from "next/head";
import Icon from "../public/favicon.ico";

const Header = () =>{
    return (
        <>
        <Head>
        <title>Anicca Research</title>
        <link rel="icon" href={Icon} />
      </Head>
        </>
    );
}

export default Header;