import { useState } from "react"
import { PointsContext } from "./context/pointsContext"
import { ClickedWordsContext } from "./context/clickedWordsContext."
import { UserContext } from "./context/userContext"
import { DataContext } from "./context/dataContext"
import { MaxPointsContext } from "./context/maxPointsContext"

const Provider = ({ children }) => {
  const [dataContext, setDataContext] = useState([])
  const [userName, setUserName] = useState("")
  const [clickedWords, setClickedWords] = useState([])
  const [points, setPoints] = useState(0)
  const [maxPoints, setMaxPoints] = useState(false)

  return (
    <DataContext.Provider value={{ dataContext, setDataContext }}>
      <UserContext.Provider value={{ userName, setUserName }}>
        <ClickedWordsContext.Provider value={{ clickedWords, setClickedWords }}>
          <PointsContext.Provider value={{ points, setPoints }}>
            <MaxPointsContext.Provider value={{ maxPoints, setMaxPoints }}>
              {children}
            </MaxPointsContext.Provider>
          </PointsContext.Provider>
        </ClickedWordsContext.Provider>
      </UserContext.Provider>
    </DataContext.Provider>
  )
}

export default Provider
