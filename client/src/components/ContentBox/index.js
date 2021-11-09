import { Box, Container} from "./styles.js";

/**
 * 
 * @param {children} param0 Is the content that will be aligned to the center of the page. The navigation menu is not included in this component.
 * @returns A components made up of center-aligned "div" tags.
 */

export default function ContentBox({ children }) {
  return (
    <>
      <Container>
        <Box>{children}</Box>
      </Container>
    </>
  )
}
