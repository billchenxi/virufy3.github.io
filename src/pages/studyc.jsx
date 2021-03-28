import React, { useEffect } from "react";

const paperURL = "https://virufy.org/study?utm_campaign=curative";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  });

  return <p>Redirecting...</p>;
}
