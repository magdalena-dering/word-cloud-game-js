import { useState } from "react"
import MainContainer from "../../components/mainContainer"
import Input from "../../components/input"
import Button from "../../components/button"
import { Wrapper, ButtonWrapper, InputWrapper } from "./styles"
import Header from "../../components/header"
import { useHistory } from "react-router"

const LogIn = () => {
  const [nickname, setNickName] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState("")
  const history = useHistory()

  const onInputChange = e => {
    setNickName(e?.target.value)
    setDisabled(false)
    setError("")
  }

  const onButtonClick = () =>
    !Boolean(nickname)
      ? (setDisabled(true), setError("* This field is required"))
      : history.push("/game")

  return (
    <>
      <Header title="Log in to Word Cloud Game" />
      <MainContainer>
        <Wrapper>
          <InputWrapper>
            <Input
              title="login"
              label="Log in"
              placeholder="Nickname"
              error={error}
              onChange={onInputChange}
            />
          </InputWrapper>
          {/* IMPORTANT Set random data on login click */}
          <ButtonWrapper>
            <Button text="Log in" disabled={disabled} onClick={onButtonClick} />
          </ButtonWrapper>
        </Wrapper>
      </MainContainer>
    </>
  )
}

export default LogIn
