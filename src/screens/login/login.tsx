import { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../context/userProvider';
import { Wrapper, ButtonWrapper, InputWrapper } from './styles';
import MainContainer from '../../components/mainContainer';
import Input from '../../components/input';
import Button from '../../components/button';
import Header from '../../components/header';

const LogIn = () => {
  const [nickname, setNickName] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');
  const { setUserName } = useContext(UserContext);

  const history = useHistory();

  const onInputChange = (e) => {
    setNickName(e?.target.value);
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
