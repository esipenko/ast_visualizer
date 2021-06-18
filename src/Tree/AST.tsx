import React from 'react';
import {Node} from "acorn";

interface ASTProps {
    sourceCode: Node | null;
}

function AST(props: ASTProps) {
    return (
        <span>
            {JSON.stringify(props.sourceCode)}
        </span>
    );
}

export default AST;
