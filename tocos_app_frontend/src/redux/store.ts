import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import viewsReducer from '../views/redux';
import navigationReducer from '../views/Navigation/redux';

export interface AppState {
  loggedIn: boolean,
  PDFFileSrc: any,
}

const initialState: AppState = {
  loggedIn: false,
  PDFFileSrc: null,
};

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    setPDFFileSrc: (state, action: PayloadAction<any>) => {
      state.PDFFileSrc = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedIn, setPDFFileSrc } = counterSlice.actions;

export const store = configureStore({
  reducer: {
    app: counterSlice.reducer,
    views: viewsReducer,
    navigation: navigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const selectIsLoggedIn = (state: RootState) => state.app.loggedIn;

export const selectPDFFileSrc = (state: RootState) => state.app.PDFFileSrc;
