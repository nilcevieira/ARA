import { useState } from "react";
import { URL_BASE_CLIENT } from "../../Url/urls";
import { Button, Container, Form, InputText, Text } from "./styles";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  function checkEnter(e) {
    if (e.key == "Enter") {
      window.location.href = `${URL_BASE_CLIENT}/busca/${searchText}`;
    }
  }
  return (
    <Container>
      <Form>
        <InputText
          type="text"
          placeholder=""
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={(e) => checkEnter(e)}
        />
        <Button href={`${URL_BASE_CLIENT}/busca/${searchText}`}>
          <Text>Buscar</Text>
        </Button>
      </Form>
    </Container>
  );
}
