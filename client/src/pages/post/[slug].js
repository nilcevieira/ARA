import Head from "next/head";

import ContentBox from "../../components/ContentBox";
import MenuBar from "../../components/Menu";
import Footer from "../../components/Footer";
import PostUnit from "../../components/Post";
import Search from "../../components/Search";
import QuickAccess from "../../components/QuickAccess";
import Highlights from "../../components/Highlighs";
import { initializeApollo } from "../../../api/Apollo";

import gql from "graphql-tag";
import { QUERY_POST_MENU } from "../../../api/queries/post";
import { BoxCenter, BoxRight } from "../../components/ContentBox/styles";

export default function Post(props) {
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
        <script async charset="utf-8" src="//cdn.embedly.com/widgets/platform.js"></script>
        <link rel="stylesheet" href="/ckeditor.css"/>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <script src='/embedly.js'></script>
      </Head>
      <MenuBar dataMenu={props.index.data.categorias}></MenuBar>
      <ContentBox>
        <Highlights dataDestaque={props.index.data.destaques}></Highlights>
        <BoxCenter>
          <PostUnit dataPost={props.post.data.publicacoes}></PostUnit>
          <BoxRight>
            <Search></Search>
            <QuickAccess dataAcesso={props.index.data.acessosRapidos}>
              Acesso Rápido
            </QuickAccess>
          </BoxRight>
        </BoxCenter>
        <Footer dataFooter={props.index.data.footer}></Footer>
      </ContentBox>
    </>
    
  );
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();
  const index = await apolloClient.query({ query: QUERY_POST_MENU });
  const { slug } = context.query;

  const QUERY_POST = gql`
    {
      publicacoes(where: { slug: "${slug}" }) {
        titulo
        texto
        tags
        anexos{
          name
          url
        }
      }
    }
  `;
  const post = await apolloClient.query({ query: QUERY_POST });

  return {
    props: {
      index: index,
      post: post,
      initialApoloState: apolloClient.cache.extract(),
    },
  };
}
