import React, { useState, useEffect } from "react";
import Axios from "axios";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import "./sass/main.scss";

const baseURL = "https://api.quotable.io/random";

function Api() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  const refresh = () => {
    Axios.get(baseURL)
      .then((response) => {
        setQuote(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  };
  useEffect(refresh, []);

  if (error) return `Error: ${error.message}`;
  if (!quote) return null;
  return (
    <div className="container">
      <h1>Random Quote Generator</h1>
      <p className="desc">By using ReactJS and Public API</p>

      <div className="container_fst">
        <h1>{quote.tags}</h1>
        <p className="content">
          <RiDoubleQuotesL />
          {quote.content}
          <RiDoubleQuotesR />
        </p>
        <address className="author">-{quote.author}</address>
      </div>
      <div className="bottom">
        <address className="myName">
          <sub>by Jeeva</sub>
        </address>
        <button className="btn" onClick={refresh}>
          Refresh
        </button>
      </div>
    </div>
  );
}
export default Api;
