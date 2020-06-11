import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect({
      enabled: true,
      host: '192.168.1.200',  // server ip
      port: 9090
    });

  tron.clear();

  console.tron = tron;
}
