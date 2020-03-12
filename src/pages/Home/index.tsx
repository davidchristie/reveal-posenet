import React, { FormEventHandler, ChangeEventHandler } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import "./index.css";
import logo from "./logo.svg";

const Home: React.FunctionComponent = () => {
  const [url, setUrl] = React.useState("https://revealjs.com");
  const history = useHistory();

  const handleUrlInputChange: ChangeEventHandler<HTMLInputElement> = event => {
    setUrl(event.target.value);
  };

  const handleFormSubmit: FormEventHandler = event => {
    event.preventDefault();
    history.push(`/present?${queryString.stringify({ url })}`);
  };

  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Reveal PoseNet</h1>
        <img src={logo} className="Home-logo" alt="logo" />
        <form className="Home-form" onSubmit={handleFormSubmit}>
          <input onChange={handleUrlInputChange} value={url} />
          <button type="submit">Present</button>
        </form>
        <p className="Home-instructions">
          Move your right hand to the right side of the screen to go to the next
          slide, and the left side of the screen to go back.
        </p>
        <a
          className="Home-link"
          href="https://github.com/davidchristie/reveal-posenet"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
};

export default Home;
