import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;

  /* align content to screen center */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  height: 448px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: #ffffff;
  text-align: center;

  img {
    margin-top: 50px;
  }

  > span {
    width: 154px;
    height: 36px;
    color: #ee4d64;
    font-family: Roboto;
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 30px;

    span {
      width: 77px;
      height: 17px;
      color: #444444;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      margin-top: 20px;
    }

    input {
      width: 300px;
      height: 45px;
      border-radius: 4px;
      border: 1px solid #dddddd;
      background-color: #ffffff;
      padding: 0 15px;
      margin-top: 7px;

      &::placeholder {
        width: 150px;
        height: 19px;
        color: #999999;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
      }
    }

    button {
      width: 300px;
      height: 45px;
      border-radius: 4px;
      background-color: #ee4d64;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      margin-top: 15px;
      border: none;

      &:hover {
        background: ${darken(0.03, '#ee4d64')};
      }
    }
  }
`;
