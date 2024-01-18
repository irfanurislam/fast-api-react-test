/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import AddTodo from "./AddTodo";
import TodoHelper from "./TodoHelper";
export const TodosContext = React.createContext({
  todos: [],
  fetchTodos: () => {},
});
export default function Todos() {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const response = await fetch("http://localhost:8000/todo");
    const todos = await response.json();
    console.log({ todos });
    setTodos(todos.data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodosContext.Provider value={{ todos, fetchTodos }}>
      <AddTodo /> {/* new */}
      <Stack spacing={5}>
        {todos.map((todo) => (
          <TodoHelper item={todo.item} id={todo.id} fetchTodos={fetchTodos} />
        ))}
      </Stack>
    </TodosContext.Provider>
  );
}
