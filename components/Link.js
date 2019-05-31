import React from "react";
import styled from "astroturf";

const Link = styled("a")`
  color: black;
  border: 1px solid black;
  background-color: white;
  padding: 20px;

  &.primary {
    color: blue;
    border: 1px solid blue;
  }
  &.color-purple {
    color: purple;
  }

  &:hover {
    color: green;
  }
`;

export default Link;
