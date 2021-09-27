import { useState } from "react"
import GlobalStyle from "./theme/global"
import dataJSON from "./data.json"
import { PointsContext } from './context/pointsContext'
import { ClickedWordsContext } from './context/clickedWordsContext.'
import { UserContext } from './context/userContext'
import AppRouter from './components/router'

export const data = dataJSON[(dataJSON.length * Math.random()) | 0]
export const modifiedObj = data.all_words.map(word =>
    Object.assign({ word: word, clicked: false }, data.all_words[word])
  )

const App = () => {
  const [userName, setUserName] = useState("")
  const [clickedWords, setClickedWords] = useState(modifiedObj)
  const [points, setPoints] = useState(0)

  return (   
    <UserContext.Provider value={{ userName, setUserName }}>
    <ClickedWordsContext.Provider value={{ clickedWords, setClickedWords }}>
    <PointsContext.Provider value={{ points, setPoints }}>
      <GlobalStyle />
      <AppRouter/>
    </PointsContext.Provider>
    </ClickedWordsContext.Provider>
    </UserContext.Provider>
  )
}

export default App
