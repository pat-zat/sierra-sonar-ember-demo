import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = (props) => {


  return (
    <SyntaxHighlighter language={props.language} style={okaidia} plugins={"lineNumbers"} wrapLines={true}>

      {props.codeString}
    </SyntaxHighlighter>
    
  );
};

export default CodeBlock;

// prismjs/plugins/normalize-whitespace/prism-normalize-whitespace