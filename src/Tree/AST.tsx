import React from 'react';
interface ASTProps {
    sourceCode: string;
}
function AST(props:ASTProps) {
    return (
        <span>
            {props.sourceCode}
        </span>
    );
}

export default AST;
