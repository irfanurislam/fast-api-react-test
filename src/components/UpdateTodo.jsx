import {
  Button,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TodosContext } from "./Todos";

function UpdateTodo({ item, id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todo, setTodo] = useState(item);
  const { fetchTodos } = React.useContext(TodosContext);

  const updateTodo = async () => {
    await fetch(`http://localhost:8000/todo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item: todo }),
    });
    onClose();
    await fetchTodos();
  };

  return (
    <>
      <Button h="1.5rem" size="sm" onClick={onOpen}>
        Update Todo
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type="text"
                placeholder="Add a todo item"
                aria-label="Add a todo item"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
            </InputGroup>
          </ModalBody>

          <ModalFooter>
            <Button h="1.5rem" size="sm" onClick={updateTodo}>
              Update Todo
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default UpdateTodo;
