import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Terminal from 'react-bash';

import store from './scripts/store';
import modules from './scripts/modules';
import styles from './styles';


const availableModules = [
  {
    name: 'Sample Module',
    description: 'This is a sample module.',
    reducer: require('./scripts/modules/sample-module/reducers').default,
    commands: require('./scripts/modules/sample-module/commands').default,
  },
  // Add more modules here
];

export default function App() {
  const [currentModule, setCurrentModule] = useState(availableModules[0]);

  const moduleOptions = availableModules.map((module, index) => {
    return {
      name: `${index + 1}. ${module.name}`,
      value: module,
    };
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
          theme={{
            background: '#141414',
            promptSymbolColor: '#f5f5f5',
            commandColor: '#f5f5f5',
            outputColor: '#f5f5f5',
            errorOutputColor: '#ff6c6b',
          }}
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
