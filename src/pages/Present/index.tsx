import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { bindPage } from "../../core/camera";
import "./index.css";
import usePresent from "./usePresent";

const Present: React.FunctionComponent = () => {
  const history = useHistory();
  const location = useLocation();

  const { onUpdate } = usePresent();

  React.useEffect(() => {
    bindPage(onUpdate);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { url } = queryString.parse(location.search);
  if (typeof url !== "string") {
    history.push("/");
    return null;
  }

  return (
    <div className="Present">
      <div id="info" style={{ display: "none" }}></div>
      <div id="loading" style={{ display: "flex" }}>
        <div className="spinner-text">Loading PoseNet model...</div>
        <div className="sk-spinner sk-spinner-pulse"></div>
      </div>
      <div id="main" style={{ display: "none" }}>
        <video id="video" playsinline style={{ display: "none" }}></video>
        <canvas id="output" />
      </div>
      <iframe className="Present-slides" id="slides" src={url} title="Slides" />
    </div>
  );
};

export default Present;
