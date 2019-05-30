import React from "react";
import Button from "../components/Button";
import Link from "../components/Link";

import "./styles.css";

const IndexPage = () => (
  <>
    <Button primary color="green">
      Green button
    </Button>
    <Link primary color="purple" className="p-4 m-12">
      Purple Link
    </Link>
    <a className="link">hoi</a>
  </>
);

export default IndexPage;
