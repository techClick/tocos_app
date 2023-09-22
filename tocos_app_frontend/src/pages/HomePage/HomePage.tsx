import React, { useState } from 'react';
import { ApiFunctionResult } from 'types/types';
import { toast } from 'react-toastify';
import { addUser, getUserBalance, transact } from 'pages/redux';
import { useDispatch } from 'react-redux';
import * as S from './HomePage.styled';
import Function from './Function';
import Loading from './Loading';

const HomePage = function HomePage() {
  const [idForCheckBalance, setIdForCheckBalance] = useState<string>();
  const [senderId, setSenderId] = useState<string>();
  const [receiverId, setReceiverId] = useState<string>();
  const [tocosToSend, setTocosToSend] = useState<string>();
  const [apiResult, setApiResult] = useState<ApiFunctionResult>(0);
  const [apiResultText, setApiResultText] = useState<string>();
  const [isShowLoading, setIsShowLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  return (
    <S.Container>
      { isShowLoading && <Loading />}
      <Function
        title='Create new user'
        buttonText='Create'
        buttonTestId='create-button'
        onClick={async () => {
          setApiResult(0);
          setIsShowLoading(true);
          const response: any = await dispatch(addUser());
          setIsShowLoading(false);
          if (response.status === 'success') {
            setApiResult(1);
            setApiResultText(`User ${response.data} has been added.`);
          } else {
            toast(response.data, { type: 'error' });
          }
        }}
        thisResult={1}
        result={apiResult}
        resultText={apiResultText}
      />
      <Function
        title="Check user's Tocos"
        buttonText='Check'
        buttonTestId='check-button'
        inputPlaceholders={['User ID']}
        inputValues={[Number(idForCheckBalance)]}
        inputTestIds={['check-input']}
        handleInputChange={[
          (e: React.ChangeEvent<HTMLInputElement>) => {
            setIdForCheckBalance(e.target.value);
          },
        ]}
        thisResult={2}
        result={apiResult}
        resultText={apiResultText}
        onClick={async () => {
          if (!idForCheckBalance) {
            toast('You must set Id to check', { type: 'error' });
            return;
          }
          setApiResult(0);
          setIsShowLoading(true);
          const response: any = await dispatch(getUserBalance(Number(idForCheckBalance)));
          setIsShowLoading(false);
          if (response.status === 'success') {
            setApiResult(2);
            setApiResultText(
              `User ${idForCheckBalance} has ${response.data} toco${Number(response.data) === 1 ? '' : 's'}.`,
            );
          } else {
            toast(`No such user. Last user id is ${response.data}.`, { type: 'error' });
          }
        }}
      />
      <Function
        title='Transact'
        buttonText='Send'
        buttonTestId='transact-button'
        inputPlaceholders={['Sender ID', 'Reciever ID', 'Tocos']}
        inputValues={[Number(senderId), Number(receiverId), Number(tocosToSend)]}
        inputTestIds={['transact-input-1', 'transact-input-2', 'transact-input-3']}
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
        onClick={async () => {
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
          setIsShowLoading(true);
          const response: any = await dispatch(
            transact(Number(senderId), Number(receiverId), Number(tocosToSend)),
          );
          setIsShowLoading(false);
          if (response.status === 'success') {
            setApiResult(3);
            setApiResultText('Successful!');
          } else {
            toast(response.data, { type: 'error' });
          }
        }}
      />
    </S.Container>
  );
};

export default HomePage;
