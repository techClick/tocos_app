/* eslint-disable no-undef */
import React from 'react';
import { TestContainer } from 'routing/Routing.test';
import { render, screen } from '@testing-library/react';
import Function from './Function';

describe('Function component works', () => {
  test('Function component renders', () => {
    render(
      <TestContainer>
        <Function
          title='test0089-title'
          inputPlaceholders={['test-placeholder-6767']}
          buttonText='button-test-5656'
        />
      </TestContainer>,
    );
  });
  test('Function displays elements properly', () => {
    render(
      <TestContainer>
        <Function
          title='test0089-title'
          inputPlaceholders={['test-placeholder-6767']}
          buttonText='button-test-5656'
        />
      </TestContainer>,
    );
    expect(screen.getAllByText('test0089-title')).toBeTruthy();
    expect(screen.queryByPlaceholderText('test-placeholder-6767')).toBeInTheDocument();
    expect(screen.getAllByText('button-test-5656')).toBeTruthy();
  });
});
