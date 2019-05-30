import React from "react";
import styled from "astroturf";

const Button = styled("button")`
  color: black;
  border: 1px solid black;
  background-color: white;

  &.primary {
    color: blue;
    border: 1px solid blue;
  }

  &.color-green {
    color: green;
  }

  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
`;

export default Button;
