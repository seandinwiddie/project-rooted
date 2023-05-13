import { Dispatch } from 'redux';
import { SampleActionTypes } from './actions/actionTypes';

export const add = (value: string) => (dispatch: Dispatch) => {
  dispatch({ type: SampleActionTypes.ADD, payload: value });
};

export const remove = (index: number) => (dispatch: Dispatch) => {
  dispatch({ type: SampleActionTypes.REMOVE, payload: index });
};

export const update = (index: number, value: string) => (dispatch: Dispatch) => {
  dispatch({ type: SampleActionTypes.UPDATE, payload: { index, value } });
};

const sampleModuleCommands = { add, remove, update };

export default sampleModuleCommands;