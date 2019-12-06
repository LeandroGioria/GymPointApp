import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
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

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 142px;
      height: 36px;
      border-radius: 4px;
      background-color: #ee4d64;
      border: 0;

      a {
        color: #ffffff;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
`;

export const StudentTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  text-align: left;

  thead th {
    color: #444444;
    font-size: 16px;
    font-weight: bold;

    padding: 15px;
  }

  tbody td {
    color: #666666;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    padding: 15px;
    border-top: 1px solid #eee;

    a {
      color: ${props => (props.edit ? '#4d85ee' : '#de3b3b')};
    }
  }
`;
