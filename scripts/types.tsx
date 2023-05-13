export interface ProjectFeature {
  name: string;
  description: string;
  reducer: (state: any, action: any) => any;
  commands: {
    [name: string]: (params: string[], state: any) => string;
  };
}