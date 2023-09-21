import React, { useState } from 'react';
import { ApiFunctionResult } from 'types/types';
import { toast } from 'react-toastify';
import { addUser } from 'pages/redux';
import { useDispatch } from 'react-redux';
import * as S from './HomePage.styled';
import Function from './Function';

const HomePage = function HomePage() {
  // toast('Please try again a little while later!', { type: 'warning' });
  const [idForCheckBalance, setIdForCheckBalance] = useState<string>();
  const [senderId, setSenderId] = useState<string>();
  const [receiverId, setReceiverId] = useState<string>();
  const [tocosToSend, setTocosToSend] = useState<string>();
  const [apiResult, setApiResult] = useState<ApiFunctionResult>(0);
  const [apiResultText, setApiResultText] = useState<string>();
  const dispatch = useDispatch();

  return (
    <S.Container>
      <Function
        title='Create new user'
        buttonText='Create'
        onClick={async () => {
          setApiResult(0);
          const response: any = await dispatch(addUser());
          console.log('DONE', response);
          setApiResult(1);
          setApiResultText('This is done');
        }}
        thisResult={1}
        result={apiResult}
        resultText={apiResultText}
      />
      <Function
        title='Check users Tocos'
        buttonText='Check'
        inputPlaceholders={['User ID']}
        inputValues={[Number(idForCheckBalance)]}
        handleInputChange={[
          (e: React.ChangeEvent<HTMLInputElement>) => {
            setIdForCheckBalance(e.target.value);
          },
        ]}
        thisResult={2}
        result={apiResult}
        resultText={apiResultText}
        onClick={() => {
          if (!idForCheckBalance) {
            toast('You must set Id to check', { type: 'error' });
            return;
          }
          setApiResult(0);
          setApiResult(2);
          setApiResultText('This is done');
        }}
      />
      <Function
        title='Transact'
        buttonText='Send'
        inputPlaceholders={['Sender ID', 'Reciever ID', 'Tocos']}
        inputValues={[Number(senderId), Number(receiverId), Number(tocosToSend)]}
        handleInputChange={[
          (e: React.ChangeEvent<HTMLInputElement>) => {
            setSenderId(e.target.value);
          },
          (e: React.ChangeEvent<HTMLInputElement>) => {
            setReceiverId(e.target.value);
          },
          (e: React.ChangeEvent<HTMLInputElement>) => {
            setTocosToSend(e.target.value);
          },
        ]}
        thisResult={3}
        result={apiResult}
        resultText={apiResultText}
        onClick={() => {
          if (!senderId) {
            toast('You must set Senders Id', { type: 'error' });
            return;
          }
          if (!receiverId) {
            toast('You must set Receivers Id', { type: 'error' });
            return;
          }
          if (!tocosToSend) {
            toast('You must set Tocos to send', { type: 'error' });
            return;
          }
          setApiResult(0);
          setApiResult(3);
          setApiResultText('This is done');
        }}
      />
    </S.Container>
  );
};

export default HomePage;
