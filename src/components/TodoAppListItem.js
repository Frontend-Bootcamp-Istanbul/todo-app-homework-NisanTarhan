import React from 'react';
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";

const TodoAppListItem = ({ content, id, completed, toggleTodo, deleteTodo }) => {
    return (
        <div style={styles.container}>
            <div style={todoStyle(completed)}
                onClick={() => toggleTodo(id)}>
                <p style={styles.todoText}>{content}</p>
            </div>
            <button onClick={() => deleteTodo(id)} style={styles.button}>Sil</button>
        </div>
    );
};

const todoStyle = (completed) => ({
    flex: 3,
    textDecoration: completed ? "line-through" : "initial",
    background: "#dbdbdb",
})

const styles = {
    container: {
        display: "flex",
        width: "20%",
        height: "50px",
        margin: '1rem',
    },
    todoText: {
        alignSelf: "center",
        paddingLeft: "1rem"
    },
    button: {
        flex: 1
    }
}

const mapDispatchToProps = {
    toggleTodo,
    deleteTodo
}

export default connect(null, mapDispatchToProps)(TodoAppListItem);