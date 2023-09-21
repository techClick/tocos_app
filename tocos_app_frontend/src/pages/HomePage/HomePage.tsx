import React, { useState } from 'react';
import * as S from './HomePage.styled';
import Function from './Function';
import { toast } from 'react-toastify';

const HomePage = function HomePage() {
  // toast('Please try again a little while later!', { type: 'warning' });
  const [idForCheckBalance, setIdForCheckBalance] = useState<string>();
  const [senderId, setSenderId] = useState<string>();
  const [receiverId, setReceiverId] = useState<string>();
  const [tocosToSend, setTocosToSend] = useState<string>();

  return (
    <S.Container>
      <Function
        title='Create new user'
        buttonText='Create'
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
        onClick={() => {
          if (!idForCheckBalance) {
            toast('You must set Id to check', { type: 'error' });
            return;
          }
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
        }}
      />
    </S.Container>
  );
};

export default HomePage;
