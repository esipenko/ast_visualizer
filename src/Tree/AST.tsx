import React from 'react';
import TreeNode from './tree-node/TreeNode';
import { ExtendedNode } from '../App';

interface ASTProps {
    sourceCode: ExtendedNode | null;
}

function AST({ sourceCode }: ASTProps) {
  console.log(sourceCode);
  return (
    <TreeNode nodes={sourceCode === null ? [] : [sourceCode]} />
  );
}

export default AST;
