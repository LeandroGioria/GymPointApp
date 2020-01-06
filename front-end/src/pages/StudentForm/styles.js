import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;

    strong {
      height: 29px;
      color: #444444;
      font-size: 24px;
      font-weight: 700;
    }

    aside {
      display: flex;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 112px;
        height: 36px;
        border-radius: 4px;
        background: #ccc;
        border: 0;
        margin-right: 16px;

        strong {
          display: flex;
          align-items: center;
          color: #ffffff;
          font-size: 14px;
          font-weight: bold;
          padding: 0 8px;
        }
      }
    }
  }
`;

export const Button = styled.button`
  width: 112px;
  border-radius: 4px;
  border: 0;
  background: #ee4d64;
  padding-left: 16px;
  display: flex;
  align-items: center;

  span {
    color: #fff;
    padding-left: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }
`;

export const StudentData = styled.table`
  width: 100%;
  max-width: 900px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 30px 30px;

  strong {
    color: #444;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 7px;
  }

  input {
    margin-bottom: 20px;
    border-radius: 4px;
    border: 1px solid #ddd;
    height: 45px;

    &::placeholder {
      color: #999;
      font-size: 16px;
      width: 150px;
    }
  }

  div {
    display: flex;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-left: 15px;
  }
`;
