"use client";

import { useEffect } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import php from "highlight.js/lib/languages/php";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("php", php);

import "highlight.js/styles/atom-one-dark.css";

export default function PrismLoader() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return <div className="hidden"></div>;
}
