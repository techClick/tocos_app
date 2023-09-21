import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { callEndpoint } from '../endPoint/endPoint';
import { RootState } from '../redux/store';
import { IResponse, Settings } from '../types/types';

export interface ViewsState {
  settings: Settings;
}

const initialState: ViewsState = {
  settings: { isSortRow: [] },
};

type SetSettings = {
  key: string,
  setting: any,
}

export const counterSlice = createSlice({
  name: 'views',
  initialState,
  reducers: {
    setSettings2: (state, action: PayloadAction<SetSettings>) => {
      state.settings = { ...state.settings, [action.payload.key]: action.payload.setting };
    },
  },
});

export const { setSettings2 } = counterSlice.actions;

export const selectSettings2 = (state: RootState) => state.views.settings;

export default counterSlice.reducer;

export const payBulk = () => async (dispatch: Function): Promise<IResponse> => {
  const response: IResponse = await dispatch(
    callEndpoint({ prefix: 1, api: 'V1.0/pay.php' }),
  );
  // console.log('FINAL', response);
  return response;
};
