import { Container, Link, Page, Items } from "./styles";

export default function Pagination({ page, max_page }) {
  let itens = [];
  for (let i = 1; i <= max_page; i++) {
    itens.push(i);
  }
  return (
    <>
      <Container>
        <Items>
          {itens.map((item) => (
            <Page>
              <Link href={`?page=${item}`}>{item}</Link>
            </Page>
          ))}
        </Items>
      </Container>
    </>
  );
}
