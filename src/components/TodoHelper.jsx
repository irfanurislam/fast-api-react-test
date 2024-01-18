import { Box, Flex, Text } from "@chakra-ui/react";
import UpdateTodo from "./UpdateTodo";

function TodoHelper({ item, id, fetchTodos }) {
  return (
    <Box p={1} shadow="sm">
      <Flex justify="space-between">
        <Text mt={4} as="div">
          {item}
          <Flex align="end">
            <UpdateTodo item={item} id={id} fetchTodos={fetchTodos} />
          </Flex>
        </Text>
      </Flex>
    </Box>
  );
}

export default TodoHelper;
