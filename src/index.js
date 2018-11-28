
import { NativeModules } from 'react-native';

const { RNPluginProgressHUD } = NativeModules;

const ProgressHUD = {
  ...RNPluginProgressHUD,
  show(status = '') {
    RNPluginProgressHUD.show(status);
  },
  dismiss(delay = 0) {
    RNPluginProgressHUD.dismiss(delay);
  },
};

export default ProgressHUD;
