import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { say } from "../../core/speech";

const getSlide = (url: string | string[] | null | undefined): number => {
  if (typeof url === "string") {
    if (url.includes("/#/")) {
      return Number(url.substr(url.lastIndexOf("/#/") + 3));
    }
  }
  return 0;
};

export default function useSlides() {
  const slide = React.useRef(0);
  const history = useHistory();
  const location = useLocation();

  const { url } = queryString.parse(location.search);

  slide.current = getSlide(url);

  function setSlide(slide: number) {
    if (typeof url === "string") {
      const nextUrl = `${new URL(url).origin}/#/${slide}`;
      history.push(`/present?${queryString.stringify({ url: nextUrl })}`);
    }
  }

  function next() {
    say("next slide");
    setSlide(slide.current + 1);
  }

  function previous() {
    say("previous slide");
    setSlide(Math.max(slide.current - 1, 0));
  }

  return {
    next,
    previous
  };
}
