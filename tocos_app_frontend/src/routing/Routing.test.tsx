/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { ToastContainer } from 'react-toastify';
import Routing from './Routing';

export const TestContainer = ({ children }:{children: React.ReactNode}) => (
  <Provider store={store}>
    <ToastContainer />
    {children}
  </Provider>
);

test('App starts', () => {
  render(
    <TestContainer>
      <Routing />
    </TestContainer>,
  );
});
