import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  strong {
    margin-bottom: 23px;
    color: #444444;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const HelpOrderTable = styled.table`
  width: 100%;
  background: #fff;
  text-align: left;

  thead th {
    color: #444444;
    font-size: 16px;
    font-weight: bold;
    padding: 15px;
  }

  tbody {
    td {
      display: flex;
      justify-content: space-between;
      color: #666666;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      padding: 15px;
      border-top: 1px solid #eee;

      a {
        color: #4d85ee;
      }
    }
  }
`;
