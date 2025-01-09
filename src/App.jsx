import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import DestinationPage from './pages/DestinationPage'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Services from './pages/Services'
import Register from './pages/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/destinations">
            <DestinationPage />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/bookings">
            <Booking />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
