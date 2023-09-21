import { createSlice } from '@reduxjs/toolkit';
import { callEndpoint } from 'endPoint/endPoint';
import { IResponse } from 'types/types';

export interface ViewsState {}

const initialState: ViewsState = {};

export const counterSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {},
});

export default counterSlice.reducer;

export const addUser = () => async (dispatch: Function): Promise<IResponse> => {
  const response: IResponse = await dispatch(
    callEndpoint({ prefix: 1, api: 'users' }),
  );
  // console.log('FINAL', response);
  return response;
};
