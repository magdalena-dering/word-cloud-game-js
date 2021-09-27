import GlobalStyle from "./theme/global"
import AppRouter from "./components/router"
import Provider from "./provider"

const App = () => {
  return (
    <Provider>
      <GlobalStyle />
      <AppRouter />
    </Provider>
  )
}

export default App
