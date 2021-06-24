import React, { useEffect } from "react";
import Container from "./container";

function Page(props) {

  return <Container wide={props.wide}>{props.children}</Container>;
}

export default Page;
