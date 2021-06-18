import React from 'react';
import {ExtendedNode} from "../../App";

interface ITreeNode {
    nodes: ExtendedNode[];
}
const getOptions = (node: ExtendedNode) => {
    if (node.body !== undefined) {
        return node.body;
    } else if (node.declarations !== undefined) {
        return node.declarations;
    } else if (node.init !== undefined) {
        return  node.init;
    } else if (node.properties !== undefined) {
        return node.properties;
    }

    return [];
}

const getSubNodes = (nodes: ExtendedNode[]) => {
    if (nodes.length > 0) {
        return nodes.map(node => {
            return {type: node.type, options: getOptions(node)}
        })
    }

    return []
}

function TreeNode({nodes}: ITreeNode) {
    return (
        <div>
            {getSubNodes(nodes).map(node => {
                return (<div>
                <span>{node.type}</span>
                    <TreeNode nodes={node.options}/>
                </div>)
            })}
        </div>
    );
}

export default TreeNode;
