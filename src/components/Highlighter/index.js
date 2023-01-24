import React from "react";
import "../../../node_modules/highlight.js/styles/a11y-dark.css";
import hljs from "../../../node_modules/highlight.js/lib/index";
import { marked } from "marked";
import { Box } from "@mui/material";

const Highlighter = ({ model }) => {
  React.useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <Box>
      {/* Example with raw JS */}
      {/* <pre>
        <code className="language-typescript">const variable = 'raw';</code>
      </pre> */}

      {/* Example with marked */}
      <div dangerouslySetInnerHTML={{ __html: marked(model) }}></div>
    </Box>
  );
};

export default Highlighter;
