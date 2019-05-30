import React from "react";
import styled from "astroturf";

const Button = styled("button")`
  color: purple;
  border: 3px solid black;
  background-color: white;

  &.primary {
    color: blue;
    border: 1px solid blue;
  }
  &.color-green {
    color: green;
  }
`;

export default Button;
