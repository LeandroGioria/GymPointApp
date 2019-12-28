import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Answer from './pages/Answer';
import Checkins from './pages/Checkins';
import HelpOrderList from './pages/HelpOrderList';
import NewHelpOrder from './pages/NewHelpOrder';
import SignIn from './pages/SignIn';

export default createAppContainer(
  createSwitchNavigator({
    Checkins,
    SignIn,
    Answer,
    HelpOrderList,
    NewHelpOrder,
  }),
);
