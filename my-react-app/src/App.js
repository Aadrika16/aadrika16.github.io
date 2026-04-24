import Home from './component/Home'
import Services from './component/Services'
import { BrowserRouter ,Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component = {Services} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App