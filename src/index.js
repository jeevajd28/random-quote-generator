import React from "react";
import ReactDOM from "react-dom";
import Api from "./Api.js";

function Index() {
  return (
    <React.StrictMode>
      <Api />
    </React.StrictMode>
  );
}
ReactDOM.render(<Api />, document.getElementById("root"));

export default Index;
