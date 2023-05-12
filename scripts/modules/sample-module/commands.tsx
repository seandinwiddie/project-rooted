import { Dispatch } from 'redux';
import { SampleActionType } from './actionTypes';

export const add = (value: string) => (dispatch: Dispatch<SampleActionType>) => {
  dispatch({ type: 'ADD', payload: value });
};

export const remove = (index: number) => (dispatch: Dispatch<SampleActionType>) => {
  dispatch({ type: 'REMOVE', payload: index });
};

export const update = (index: number, value: string) => (dispatch: Dispatch<SampleActionType>) => {
  dispatch({ type: 'UPDATE', payload: { index, value } });
};
