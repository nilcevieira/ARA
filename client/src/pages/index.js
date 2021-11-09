import Head from "next/head";
import ContentBox from "../components/ContentBox";
import MenuBar from "../components/Menu";
import SliderImg from "../components/Slider";
import Posts from "../components/Posts";
import Search from "../components/Search";
import QuickAccess from "../components/QuickAccess";
import Highlights from "../components/Highlighs";
import Footer from "../components/Footer";
import { initializeApollo } from "../../api/Apollo";
import { BoxCenter, BoxRight } from "../components/ContentBox/styles";
import { QUERY_INDEX } from "../../api/queries";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>ARA</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/ckeditor.css"/>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        
      </Head>
      <MenuBar dataMenu={props.index.data.categorias}></MenuBar>
      <ContentBox>
        <SliderImg dataSlider={props.index.data.headers}></SliderImg>
        <BoxCenter>
          <Posts dataPost={props.index.data.publicacoes}></Posts>
          <BoxRight>
            <Search></Search>
            <QuickAccess dataAcesso={props.index.data.acessosRapidos}>
              Acesso Rapido
            </QuickAccess>
          </BoxRight>
        </BoxCenter>
        <Highlights dataDestaque={props.index.data.destaques}></Highlights>
        <Footer dataFooter={props.index.data.footer}></Footer>
      </ContentBox>
    </>
  );
}
export async function getServerSideProps() {
  const apolloClient = initializeApollo();
  const index = await apolloClient.query({ query: QUERY_INDEX });
  return {
    props: {
      index: index,
      initialApoloState: apolloClient.cache.extract(),
    },
  };
}
