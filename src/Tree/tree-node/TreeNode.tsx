import React from 'react';
import { ExtendedNode } from '../../App';

interface ITreeNode {
    nodes: ExtendedNode[];
}
const getOptions = (node: ExtendedNode) => {
  if (node.body !== undefined) {
    return node.body;
  } if (node.declarations !== undefined) {
    return node.declarations;
  } if (node.init !== undefined) {
    return node.init;
  } if (node.properties !== undefined) {
    return node.properties;
  }

  return [];
};

const getSubNodes = (nodes: ExtendedNode[]) => {
  if (nodes.length > 0) {
    return nodes.map((node) => ({ type: node.type, options: getOptions(node) }));
  }

  return [];
};

function TreeNode({ nodes }: ITreeNode) {
  return (
    <div>
      {getSubNodes(nodes).map((node) => (
        <div>
          <span>{node.type}</span>
          <TreeNode nodes={node.options} />
        </div>
      ))}
    </div>
  );
}

export default TreeNode;
