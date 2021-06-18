import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/webpack-resolver';
import 'ace-builds';

const styles = {
  width: '50%',
  height: '100%',
};

interface EditorProps {
    setSource: (newValue: string) => void
}

function Editor({ setSource }: EditorProps) {
  return (
    <AceEditor
      mode="javascript"
      theme="github"
      onChange={setSource}
      name="UNIQUE_ID_OF_DIV"
            // editorProps={{ $blockScrolling: true }}
      style={styles}
    />
  );
}

export default Editor;
