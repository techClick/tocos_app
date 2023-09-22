/* eslint-disable no-undef */
import React from 'react';
import { TestContainer } from 'routing/Routing.test';
import { fireEvent, render, screen } from '@testing-library/react';
import Homepage from './HomePage';

describe('Homepage works correctly', () => {
  test('Homepage renders', () => {
    render(
      <TestContainer>
        <Homepage />
      </TestContainer>,
    );
  });
  test('Initial app functions are loaded', () => {
    const { getAllByText } = render(
      <TestContainer>
        <Homepage />
      </TestContainer>,
    );
    const screenText1 = getAllByText(/Create new user/i);
    expect(screenText1).toBeTruthy();
    const screenText2 = getAllByText(/Check users Tocos/i);
    expect(screenText2).toBeTruthy();
    const screenText3 = getAllByText(/Transact/i);
    expect(screenText3).toBeTruthy();
  });
  test('Check balance input works', () => {
    render(
      <TestContainer>
        <Homepage />
      </TestContainer>,
    );
    const checkInput = screen.getByTestId('check-input');
    fireEvent.change(checkInput, { target: { value: 708978 } });
    expect(screen.getByDisplayValue('708978')).toBeInTheDocument();
    fireEvent.change(checkInput, { target: { value: 809901717 } });
    expect(screen.getByDisplayValue('809901717')).toBeInTheDocument();
  });
  test('Check balance button works and prevents sending empty fields', async () => {
    render(
      <TestContainer>
        <Homepage />
      </TestContainer>,
    );
    const checkInput = screen.getByTestId('check-input');
    fireEvent.change(checkInput, { target: { value: '' } });
    const checkButton = screen.getByTestId('check-button');
    fireEvent.click(checkButton);
    expect(await screen.findByText(/Id to check/i)).toBeInTheDocument();
  });
  test('Transaction inputs work', () => {
    render(
      <TestContainer>
        <Homepage />
      </TestContainer>,
    );
    const transactionInput1 = screen.getByTestId('transact-input-1');
    fireEvent.change(transactionInput1, { target: { value: 1034735 } });
    expect(screen.getByDisplayValue('1034735')).toBeInTheDocument();
    fireEvent.change(transactionInput1, { target: { value: 2084747 } });
    expect(screen.getByDisplayValue('2084747')).toBeInTheDocument();
    const transactionInput2 = screen.getByTestId('transact-input-2');
    fireEvent.change(transactionInput2, { target: { value: 3053434 } });
    expect(screen.getByDisplayValue('3053434')).toBeInTheDocument();
    fireEvent.change(transactionInput2, { target: { value: 404564 } });
    expect(screen.getByDisplayValue('404564')).toBeInTheDocument();
    const transactionInput3 = screen.getByTestId('transact-input-3');
    fireEvent.change(transactionInput3, { target: { value: 5075757 } });
    expect(screen.getByDisplayValue('5075757')).toBeInTheDocument();
    fireEvent.change(transactionInput3, { target: { value: 6076767 } });
    expect(screen.getByDisplayValue('6076767')).toBeInTheDocument();
  });
  test('Transaction button works and does not send empty fields', async () => {
    render(
      <TestContainer>
        <Homepage />
      </TestContainer>,
    );
    const transactButton = screen.getByTestId('transact-button');
    fireEvent.click(transactButton);
    expect(await screen.findByText(/must set Senders Id/i)).toBeInTheDocument();
    const transactionInput1 = screen.getByTestId('transact-input-1');
    fireEvent.change(transactionInput1, { target: { value: 10 } });
    fireEvent.click(transactButton);
    expect(await screen.findByText(/must set Receivers Id/i)).toBeInTheDocument();
    const transactionInput2 = screen.getByTestId('transact-input-2');
    fireEvent.change(transactionInput2, { target: { value: 10 } });
    fireEvent.click(transactButton);
    expect(await screen.findByText(/must set Tocos/i)).toBeInTheDocument();
  });
});
