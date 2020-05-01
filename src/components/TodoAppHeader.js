import React from 'react';
import TodoAppTitle from "./TodoAppTitle";
import TodoAppAdd from "./TodoAppAdd";

const TodoAppHeader = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <TodoAppTitle />
            <TodoAppAdd />
        </div>
    );
};

export default TodoAppHeader;