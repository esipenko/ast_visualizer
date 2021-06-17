import React, {useState} from 'react';
import './App.css';
import Editor from "./editor/Editor";
import AST from "./Tree/AST";

function App() {
  const [source, setSource] = useState("");

  return (
      <div className="App">
          <Editor setSource={setSource}/>
          <AST sourceCode={source} />
      </div>
  );
}

export default App;
