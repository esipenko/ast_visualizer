import React, {useState} from 'react';
import './App.css';
import Editor from "./editor/Editor";
import AST from "./Tree/AST";
import {parse, Node} from "acorn";

function App() {
  const [source, setSource] = useState<Node | null>(null);

  const updateSource = (code: string) => {
      let result: Node | null = null;

      try {
          result = parse(code);
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
