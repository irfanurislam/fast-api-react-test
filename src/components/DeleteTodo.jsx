import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { TodosContext } from "./Todos";

function DeleteTodo({ id }) {
  const { fetchTodos } = useContext(TodosContext);

  const deleteTodo = async () => {
    await fetch(`http://localhost:8000/todo/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: { id: id },
    });
    await fetchTodos();
  };

  return (
    <Button h="1.5rem" size="sm" onClick={deleteTodo}>
      Delete Todo
    </Button>
  );
}

export default DeleteTodo;
