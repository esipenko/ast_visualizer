import React, {useState} from 'react';
import './App.css';
import Editor from "./editor/Editor";
import AST from "./Tree/AST";
import {parse, Node} from "acorn";


export interface ExtendedNode extends Node {
    body: ExtendedNode[];
    declarations?: ExtendedNode[];
    elements?: ExtendedNode[];
    init?: ExtendedNode[];
    properties?: ExtendedNode[];
}


function App() {
  const [source, setSource] = useState<ExtendedNode | null>(null);

  const updateSource = (code: string) => {
      let result: ExtendedNode | null = null;

      try {
          // Types for acorn not implement many their features
          (result as any) = parse(code);
      } catch (e) {
          console.log(e);
      }

      setSource(result);
  }

  return (
      <div className="App">
          <Editor setSource={updateSource}/>
          <AST sourceCode={source} />
      </div>
  );
}

export default App;
