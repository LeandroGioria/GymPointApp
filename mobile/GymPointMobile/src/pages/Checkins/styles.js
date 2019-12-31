import { Platform } from 'react-native';

import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  padding: 0 20px;
`;

export const CheckinButton = styled(Button)`
  width: 335px;
  margin-top: 20px;
`;

export const CheckinList = styled.View``;

export const Item = styled.View`
  width: 335px;
  margin-top: 20px;
  height: 46px;
  border-radius: 4px;
  border: solid 1px #dddddd;
  background: #ffffff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Time = styled.Text`
  margin-right: 20px;
  color: #666;
  font-size: 14px;
  font-weight: 400;
`;

export const Text = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
  margin-left: 20px;
`;
