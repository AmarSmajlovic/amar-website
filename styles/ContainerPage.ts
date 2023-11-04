import styled from "@emotion/styled";
import { Container, theme } from "@chakra-ui/react";

type Props = {
  minHeight?: string;
};

export const ContainerPage = styled(Container)<Props>`
  padding-top: 100px;
  min-height: ${(props) => props.minHeight || "100vh"};
  max-width: ${theme.sizes["6xl"]};

  /* scroll-snap-align: start; */
  /* scroll-snap-stop: always; */
`;
