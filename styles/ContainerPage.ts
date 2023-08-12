import styled from "@emotion/styled";
import { Container, theme } from "@chakra-ui/react";

export const ContainerPage = styled(Container)`
  padding-top: 100px;
  scroll-snap-align: start;
  height: 100vh;
  scroll-snap-stop: always;
  max-width: ${theme.sizes["6xl"]};
`;
