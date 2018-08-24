
import { NativeModules } from 'react-native';

const { RNProgressHud } = NativeModules;

const ProgressHUD = {
  ...RNProgressHud,
  show(status = '') {
    RNProgressHud.show(status);
  },
  dismiss(delay = 0) {
    RNProgressHud.dismiss(delay);
  },
};

export default ProgressHUD;
