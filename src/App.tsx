import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import { store } from './store/index'
import GlobalStyle, { Container } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <BarraLateral />
        <ListaDeTarefas />
      </>
    )
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
