import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 15px 20px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #dddddd;
  margin-bottom: 10px;
`;

export const Time = styled.Text`
  color: #666;
  font-size: 14px;
  text-align: right;
`;

export const Text = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 14px;
`;
