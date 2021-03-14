import React from "react";
import { useStateValue } from "../Context/StateProvider";

function Testing() {
  const [{ symbol }, dispatch] = useStateValue();
  return <div></div>;
}

export default Testing;
