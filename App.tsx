import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Terminal from 'react-bash';

import store from './scripts/store';
import { modules } from './scripts/modules';
import styles from './styles';

import TerminalComponent from './TerminalComponent';

export default function App() {

const [currentModule, setCurrentModule] = useState(modules.length > 0 ? modules[0] : {});

const moduleOptions = modules.reduce((options, module, index) => {
  options[`${index + 1}. ${module.name}`] = module;
  return options;
}, {});

const listModulesCommand = {
  command: 'modules',
  description: 'List all available modules',
  executor: ({ structure, ...props }: any) => {
    const output = Object.values(structure).map((module:any) => module.name).join('\n');
    return { output, structure, ...props };
  },
};

const extensions = {
  listModulesCommand: {
    ...listModulesCommand,
  },
  ...(Array.isArray(currentModule.commands)
    ? currentModule.commands.reduce((acc, command) => {
        acc[command.command] = {
          ...command,
        };
        return acc;
      }, {})
    : {}),
};

  return (
    <Provider store={store}>
      <View style={styles.appContainer}>
        <Text style={styles.text}>Welcome to your Redux-powered app!</Text>
        <StatusBar style="auto" />
        <TerminalComponent
          prefix={currentModule.name}
          description={currentModule.description}
          structure={moduleOptions}
          theme={Terminal.Themes.DARK}
          styles={{
            root: {
              height: '50%',
            },
          }}
        />
      </View>
    </Provider>
  );
}