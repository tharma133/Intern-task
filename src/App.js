import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import DetailPage from './DetailPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/detail/:name' exact>
          <DetailPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
