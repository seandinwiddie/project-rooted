import { SampleModule } from './modules/sample-module';

import sampleModuleCommands from './modules/sample-module/commands';
import sampleModuleReducers from './modules/sample-module/reducers';

const modules: SampleModule[] = [
  {
    name: 'Sample Module',
    description: 'This is a sample module.',
    reducer: sampleModuleReducers,
    commands: sampleModuleCommands,
  },
  // Add additional modules here
];

export { modules };