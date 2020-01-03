import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  border: solid 1px #dddddd;
  padding: 20px 20px;
  margin: 10px 0;
`;

export const HelpHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: ${props => (props.feedback ? '#42CB59' : '#999')};
`;

export const Time = styled.Text`
  color: #666;
  text-align: right;
`;

export const Question = styled.Text.attrs({
  numberOfLines: 4,
})`
  width: 100000;
  color: #666;
`;
