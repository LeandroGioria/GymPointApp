import { Platform } from 'react-native';

import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
`;

export const NewHelpButton = styled(Button)`
  width: 335px;
  margin-top: 20px;
`;

export const HelpList = styled.ScrollView.attrs({
  // Change to flatlist
  showsVerticalScrollIndicator: false,
})``;

export const Help = styled.View`
  background: #fff;
  width: 335px;
  height: 150px;
  border-radius: 4px;
  border: solid 1px #dddddd;
  padding: 20px 20px;
  margin: 10px 0;
`;

export const HelpHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: ${props => (props.feedback ? '#42CB59' : '#999')};
`;

export const Time = styled.Text.attrs()`
  color: #666;
`;

export const Question = styled.Text`
  color: #666;
`;
