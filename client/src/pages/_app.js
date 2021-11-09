import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../../api/Apollo";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #f2f2f2;
    font-family: 'Poppins', sans-serif;
    vertical-align: baseline;
    font-size: 1.6rem;
  }
  html{
    font-size: 62.5%;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApoloState);
  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
