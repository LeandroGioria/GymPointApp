import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: #fff;
  border-radius: 4px;
  border-color: #ddd;
  border: 1px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.8)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
`;
