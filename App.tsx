import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Terminal from 'react-bash';

import store from './scripts/store';
// import modules from './scripts/modules';
import { modules } from './scripts/modules';
import styles from './styles';

export default function App() {
  const [currentModule, setCurrentModule] = useState(modules.length > 0 ? modules[0] : {});

  const moduleOptions = {};
  modules.forEach((module, index) => {
    moduleOptions[`${index + 1}. ${module.name}`] = module;
  });

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Welcome to your Redux-powered app!</Text>
        <StatusBar style="auto" />
        <Terminal
          prefix={currentModule.name}
          description={currentModule.description}
          commands={currentModule.commands}
          structure={moduleOptions}
          theme={Terminal.Themes.DARK}
          styles={{
            root: {
              height: '100%',
            },
          }}
          extensions={{
            sampleModule: {
              reducer: currentModule.reducer,
            },
          }}
        />
      </View>
    </Provider>
  );
}
