import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 950px;
  min-width: 550px;
  margin: 30px auto;
  form#form-enrollments {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px 30px 30px;
    background: #fff;
    align-items: flex-start;
    label {
      width: 100%;
      margin: 25px 0 5px;
    }
    label + label {
      margin-left: 16px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h1 {
    color: #333;
  }
  div {
    display: flex;
    align-items: center;
    button {
      display: flex;
      align-items: center;
      padding: 0 10px;
      width: 112px;
      height: 36px;
      border: 0;
      border-radius: 4px;
      color: #fff;
      background: #ccc;
      &:hover {
        background: ${darken(0.04, '#ccc')};
      }
      span {
        padding-left: 10px;
        font-weight: bold;
      }
    }
    button + button {
      background: #ee4d64;
      margin-left: 16px;
      &:hover {
        background: ${darken(0.03, '#ee4d64')};
      }
    }
  }
`;

export const Student = styled.div`
  width: 100%;
  padding-top: 25px;
  label {
    font-weight: bold;
    color: #333;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  label {
    font-weight: bold;
    color: #333;
    width: 100%;
  }
  input[name='start_date'],
  input[name='end_date'],
  input[name='price'] {
    width: 100%;
    height: 45px;
    margin: 7px 0 0;
    padding: 0 15px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  @media (max-width: 588px) {
    width: 100%;
    flex-direction: column;
    label {
      display: flex;
      flex-direction: column;
      margin: 20px 0 0 !important;
    }
  }
`;
