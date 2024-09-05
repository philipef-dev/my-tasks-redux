import { Provider } from 'react-redux'
import { store } from './store/index'
import GlobalStyle, { Container } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
