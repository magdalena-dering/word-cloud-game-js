import React, { useState, useContext, ChangeEvent } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../context/userProvider';
import { Wrapper, ButtonWrapper, InputWrapper } from './styles';
import MainContainer from '../../components/mainContainer';
import Input from '../../components/input';
import Button from '../../components/button';
import Header from '../../components/header';

const LogIn = () => {
  const [nickname, setNickName] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const { setUserName } = useContext(UserContext);

  const history = useHistory();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setNickName(target.value);
    setDisabled(false);
    setError('');
  };

  const onButtonClick = () => {
    return !Boolean(nickname)
      ? (setDisabled(true), setError('* This field is required'))
      : (setUserName(nickname), history.push('/game'));
  };

  return (
    <>
      <Header title="Word Cloud Game" />
      <MainContainer>
        <Wrapper>
          <InputWrapper>
            <Input
              title="login"
              label="Log in"
              placeholder="Nickname"
              value={nickname}
              error={error}
              onChange={onInputChange}
            />
          </InputWrapper>
          <ButtonWrapper>
            <Button
              text="Log in"
              disabled={disabled}
              onClick={onButtonClick}
            />
          </ButtonWrapper>
        </Wrapper>
      </MainContainer>
    </>
  );
};

export default LogIn;
