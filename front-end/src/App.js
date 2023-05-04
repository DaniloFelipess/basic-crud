import GlobalStyle from "./styles/globalstyles";
import Form from "./components/Form/Form";
import styled from "styled-components";
import { toast, ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Grid from "./components/Grid/Grid";
import UsersService from "./services/service";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2`
  /* color: white; */
`;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await UsersService.getUsers();
      console.log("users", users);
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Container>
        <Title>Usuários</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
      </Container>
      <ToastContainer
        autoClose={3000}
        transition={Flip}
        position={toast.POSITION.TOP_RIGHT}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
