import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 20px 25px 0;
`;

export const Box = styled.View`
  background: #fff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 20px;
  align-self: stretch;
`;

export const HeaderMod = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  color: #444444;
`;

export const Time = styled.Text`
  text-align: right;
  font-size: 14px;
  color: #666666;
`;

export const Content = styled.Text`
  color: #666666;
  font-size: 14px;
  margin-top: 16px;
`;

export const Answer = styled.View`
  margin-top: 20px;
`;
