import React from 'react';
import TodoAppListItem from "./TodoAppListItem";
import { connect } from "react-redux";

const TodoAppList = ({ todos }) => {
    return (
        <div style={styles.todoListContainer}>
            {
                todos.map((todo) => {
                    return <TodoAppListItem key={todo.id} {...todo} />
                })
            }
        </div>
    );
};

const styles = {
    todoListContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todoReducer
    }
}


export default connect(mapStateToProps)(TodoAppList);