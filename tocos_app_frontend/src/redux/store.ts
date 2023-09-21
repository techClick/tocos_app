import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import viewsReducer from 'views/redux';
import navigationReducer from 'views/Navigation/redux';

export interface AppState {
  loggedIn: boolean,
}

const initialState: AppState = {
  loggedIn: false,
};

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedIn } = counterSlice.actions;

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: true,
  }),
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
