import styled from "@emotion/styled";
import { Container, theme } from "@chakra-ui/react";

export const ContainerPage = styled(Container)`
  padding-top: 100px;
  min-height: 100vh;
  max-width: ${theme.sizes["6xl"]};
  /* scroll-snap-align: start; */
  /* scroll-snap-stop: always; */
`;
