import React from 'react';

const getSubNodes = (node: any) => {
  const keys = Object.keys(node);

  return keys.map((key) => {
    const curProp = node[key];

    if (Array.isArray(curProp)) {
      return (
        <ul>
          <h3>{key}</h3>
          :
          {' '}
          {curProp.map((el) => <li>{getSubNodes(el)}</li>)}
        </ul>
      );
    } if (typeof curProp === 'object' && curProp !== null) {
      return (
        <ul>
          <h5>{key}</h5>
          :
          {' '}
          <li>{getSubNodes(curProp)}</li>
        </ul>
      );
    }
    return (
      <li>
        <h6>{key}</h6>
        :
        {curProp}
      </li>
    );
  });
};

function TreeNode({ nodes }: any) {
  return (
    <ul>
      {getSubNodes(nodes).map((el) => el)}
    </ul>
  );
}

export default TreeNode;
