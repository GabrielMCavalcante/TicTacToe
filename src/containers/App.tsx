import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Components
import Header from 'components/Header'
import Menu from 'components/Menu'
import Footer from 'components/Footer'

// Containers
import GameTable from 'containers/GameTable'

// CSS styles
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Menu}/>
        {/* <Route exact path="/pvp" component={PvpMenu}/> */}
        {/* <Route exact path="/pve" component={PveMenu}/> */}
        {/* <Route exact path="/game" component={Game}/> */}
        {/* <Route exact path="/game/results" component={GameResults}/> */}
      </Switch>
      <GameTable />
      <Footer />
    </div>
  )
}

export default App