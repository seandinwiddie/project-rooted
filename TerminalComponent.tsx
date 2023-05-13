import React, { useState } from 'react';
import { modules } from './scripts/modules';
import Terminal from 'react-bash';

const commands = {
  echo: {
    method: (args: string) => ({ output: args }),
    options: [{ name: '-c', description: 'The string to echo' }],
    usage: 'echo [-c] <string>',
  },
  help: {
    method: () => ({
      output: Object.keys(commands).map((cmd) => `- ${cmd}`).join('\n'),
    }),
    usage: 'help',
  },
  modules: {
    method: ({ structure, ...props }: any) => {
      const output = Object.values(structure).map((module: any) => module.name).join('\n');
      return { output, structure, ...props };
    },
    description: 'List all available modules',
  },
};


export default function TerminalComponent(props: any) {
   return <Terminal prefix=">" extensions={{...commands, ...props.extensions}} />;
}