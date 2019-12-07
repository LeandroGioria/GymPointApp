import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  padding: 30px 30px;

  span {
    color: #444;
    font-size: 15px;
    font-weight: bold;
  }

  input {
    width: 100%;
    height: 127px;
    border-radius: 4px;
    border: 1px solid #ddd;
    color: #fff;
    margin-top: 7px;
  }

  button {
    width: 100%;
    border-radius: 4px;
    height: 45px;
    background: #ee4d64;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin-top: 21px;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  height: 100%;
  max-height: 100px;
  color: #666;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  margin-top: 7px;
  margin-bottom: 24px;
`;
