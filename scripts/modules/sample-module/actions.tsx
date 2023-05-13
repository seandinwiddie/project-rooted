import { Dispatch } from 'redux';
import { SampleActionTypes } from './actions/actionTypes';

export const addSampleData = (value: string) => (dispatch: Dispatch) => {
  dispatch({ type: SampleActionTypes.ADD, payload: value });
};

export const removeSampleData = (index: number) => (dispatch: Dispatch) => {
  dispatch({ type: SampleActionTypes.REMOVE, payload: index });
};

export const updateSampleData = (index: number, value: string) => (dispatch: Dispatch) => {
  dispatch({ type: SampleActionTypes.UPDATE, payload: { index, value } });
};

const sampleModuleCommands = { addSampleData, removeSampleData, updateSampleData };

export default sampleModuleCommands;