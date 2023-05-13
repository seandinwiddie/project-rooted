import React from 'react';
import { Bash } from 'react-bash';

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
};

export default function TerminalComponent() {
  return <Bash prefix=">" commands={commands} />;
}
