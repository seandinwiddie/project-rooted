import { IModule } from './types';

import sampleModuleCommands from './modules/sample-module/commands';
import sampleModuleReducers from './modules/sample-module/reducers';

const sampleModule: IModule = {
  name: 'Sample Module',
  description: 'This is a sample module.',
  reducer: sampleModuleReducers,
  commands: sampleModuleCommands,
};

const modules: IModule[] = [
  sampleModule,
  // Add more modules here
];

export default modules;
