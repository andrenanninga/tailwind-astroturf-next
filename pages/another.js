import React from "react";
import styled from "styled-components";
import Whatever from "../components/Whatever";

const Page = styled.div`
  background-color: green;
  width: 50vw;
  height: 50vh;
`;

const IndexPage = () => (
  <Page>
    <Whatever />
  </Page>
);

export default IndexPage;
