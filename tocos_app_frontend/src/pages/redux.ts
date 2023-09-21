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
    callEndpoint({ method: 'POST', api: 'users' }),
  );
  return response;
};

export const getUserBalance = (userId: number) =>
  async (dispatch: Function): Promise<IResponse> => {
    const response: IResponse = await dispatch(
      callEndpoint({ method: 'GET', api: `users/${userId}` }),
    );
    return response;
  };

export const transact = (senderId: number, receiverId: number, tocos: number) =>
  async (dispatch: Function): Promise<IResponse> => {
    const response: IResponse = await dispatch(
      callEndpoint({
        method: 'POST',
        api: 'transactions',
        body: JSON.stringify({
          senderId, receiverId, tocos,
        }),
      }),
    );
    return response;
  };
