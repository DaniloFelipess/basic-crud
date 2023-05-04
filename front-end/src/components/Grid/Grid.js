import React from "react";
import axios from "axios";
import { Table, Th, Thead, Tr, Tbody, Td } from "./styles";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import UsersService from "../../services/service";

function Grid({ users, setUsers, setOnEdit }) {
  const handleEdit = async (item) => {
    setOnEdit(item);
  };
  const handleDelete = async (id) => {
    await UsersService.deleteUSer(id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);
        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => {
        toast.error(data);
      });
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th onlyweb>id</Th>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyweb>Fone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, index) => (
          <Tr key={index}>
            <Td width="5%" onlyweb>
              {" "}
              {item.id}
            </Td>
            <Td width="30%"> {item.nome}</Td>
            <Td width="30%"> {item.email}</Td>
            <Td width="20%" onlyweb>
              {item.fone}
            </Td>
            <Td alignCenter width="5%">
              <FaEdit
                style={{ cursor: "pointer" }}
                onClick={() => handleEdit(item)}
              />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(item.id)}
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default Grid;
