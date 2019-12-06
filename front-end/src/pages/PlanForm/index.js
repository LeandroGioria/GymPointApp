import React from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
// import { MdSearch } from 'react-icons/md';
import { Input } from '@rocketseat/unform';
import { Container, Button, StudentData, Item } from './styles';

export default function Plans() {
  function handleSave() {}
  return (
    <Container>
      <header>
        <strong>Cadastro de plano</strong>
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
        <strong>TÍTULO DO PLANO</strong>
        <Input name="name" type="text" />
        <div>
          <Item>
            <strong>DURAÇÃO (em meses)</strong>
            <Input name="duracao" type="number" />
          </Item>
          <Item>
            <strong>PREÇO MENSAL</strong>
            <Input name="preco" type="number" />
          </Item>
          <Item>
            <strong>PREÇO TOTAL</strong>
            <Input name="total" disabled />
          </Item>
        </div>
      </StudentData>
    </Container>
  );
}
