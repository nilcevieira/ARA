import Head from "next/head";

import ContentBox from "../../components/ContentBox";
import MenuBar from "../../components/Menu";
import SliderImg from "../../components/Slider";
import Posts from "../../components/Posts";
import Search from "../../components/Search";
import QuickAccess from "../../components/QuickAccess";
import Highlights from "../../components/Highlighs";
import Footer from "../../components/Footer";
import { initializeApollo } from "../../../api/Apollo";
import { BoxCenter, BoxRight } from "../../components/ContentBox/styles";
import { QUERY_NAVEGATION } from "../../../api/queries/navigation";

import gql from "graphql-tag";
import Pagination from "../../components/Pagination";

export default function AcessoRapido(props) {
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
        <link rel="stylesheet" href="/ckeditor.css" />
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <MenuBar dataMenu={props.index.data.categorias}></MenuBar>
      <ContentBox>
        <SliderImg dataSlider={props.index.data.headers}></SliderImg>
        <BoxCenter>
          <Posts dataPost={props.post.data.publicacoes}></Posts>
          <BoxRight>
            <Search></Search>
            <QuickAccess dataAcesso={props.index.data.acessosRapidos}>
              Acesso Rápido
            </QuickAccess>
          </BoxRight>
        </BoxCenter>
        <Pagination page={props.page} max_page={props.max_page}>{props.max_page}</Pagination>
        <Highlights dataDestaque={props.index.data.destaques}></Highlights>
        <Footer dataFooter={props.index.data.footer}></Footer>
        
      </ContentBox>
    </>
  );
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();
  const index = await apolloClient.query({ query: QUERY_NAVEGATION });
  const { slug } = context.query;
  let { page } = context.query;
  let itens_page = 20;
  let QUERY_POST_ACESSO_RAPIDO
  if (!page) {
    page = 1;
  }
  if (page == 1) {
    QUERY_POST_ACESSO_RAPIDO = gql`
    {
      publicacoes(where: { acessos_rapido: { slug: "${slug}" } }, start:0 ,limit:${itens_page}, sort: "id:desc") {
        id
        titulo
        resumo
        slug
        capa {
          url
        }
      }
      publicacoesConnection(where: { acessos_rapido: { slug: "${slug}" } }){
        aggregate{
          count
        }
      }
    }
  `;
  }
  else{
    let start = (itens_page * page) - itens_page
    QUERY_POST_ACESSO_RAPIDO = gql`
    {
      publicacoes(where: { acessos_rapido: { slug: "${slug}" } }, start:${Number(start)} ,limit:${itens_page}, sort: "id:desc") {
        id
        titulo
        resumo
        slug
        capa {
          url
        }
      }
      publicacoesConnection(where: { acessos_rapido: { slug: "${slug}" } }){
        aggregate{
          count
        }
      }
    }
  `;
  }

  
  const posts_acesso_rapido = await apolloClient.query({
    query: QUERY_POST_ACESSO_RAPIDO,
  });
  let total = posts_acesso_rapido.data.publicacoesConnection.aggregate.count
  let max_page = Math.ceil(total/itens_page)
  return {
    props: {
      index: index,
      post: posts_acesso_rapido,
      page: page,
      max_page: max_page,
      initialApoloState: apolloClient.cache.extract(),
    },
  };
}
