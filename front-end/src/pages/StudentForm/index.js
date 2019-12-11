import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
// import { MdSearch } from 'react-icons/md';
import { Input, Form } from '@rocketseat/unform';
import { Container, Button, StudentData, Item } from './styles';

export default function StudentForm() {
  const [studentData, setStudentData] = useState([]);

  function handleSave() {}

  return (
    <Container>
      <header>
        <strong>Cadastro de aluno</strong>
        <aside>
          <Link to="/students">
            <MdChevronLeft size={20} color="#fff" />
            <strong>VOLTAR</strong>
          </Link>
          <Button onClick={handleSave}>
            <MdCheck size={20} color="#fff" />
            <span>SALVAR</span>
          </Button>
        </aside>
      </header>
      <StudentData>
        <strong>NOME COMPLETO</strong>
        <Input name="name" type="text" placeholder="Nome Sobrenome" />
        <strong>ENDEREÇO DE E-MAIL</strong>
        <Input name="email" type="e-mail" placeholder="exemplo@email.com" />
        <div>
          <Item>
            <strong>IDADE</strong>
            <Input name="idade" type="text" />
          </Item>
          <Item>
            <strong>PESO (em kg)</strong>
            <Input name="peso" type="number" />
          </Item>
          <Item>
            <strong>Altura</strong>
            <Input name="altura" type="number" />
          </Item>
        </div>
      </StudentData>
    </Container>
  );
}
