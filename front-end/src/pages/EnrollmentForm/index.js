import React from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
// import { MdSearch } from 'react-icons/md';
import { Input } from '@rocketseat/unform';
import { Container, Button, StudentData, Item } from './styles';

export default function EnrollmentForm() {
  function handleSave() {}
  return (
    <Container>
      <header>
        <strong>Cadastro de matrícula</strong>
        <aside>
          <Link to="/enrollments">
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
        <strong>ALUNO</strong>
        <Input name="name" type="text" placeholder="Buscar aluno" />
        <div>
          <Item>
            <strong>PLANO</strong>
            <Input name="plano" type="list" placeholder="Selecione o plano" />
          </Item>
          <Item>
            <strong>DATA DE INÍCIO</strong>
            <Input name="preco" type="date" placeholder="Escolha a data" />
          </Item>
          <Item>
            <strong>DATA DE TÉRMINO</strong>
            <Input name="termino" type="date" disabled />
          </Item>
          <Item>
            <strong>VALOR FINAL</strong>
            <Input name="final" type="number" disabled />
          </Item>
        </div>
      </StudentData>
    </Container>
  );
}
