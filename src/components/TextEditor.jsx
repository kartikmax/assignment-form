import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { Card } from "@mui/material";

function TextEditor() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(() => ({
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    placeholder: "Start typing...",
  }), []);

  return (
    <Card>
      <h1>Text Editor</h1>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent.target.innerHTML)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
    </Card>
  );
}

export default TextEditor;
