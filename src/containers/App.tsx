import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Components
import Header from 'components/Header'
import Footer from 'components/Footer'

// Containers
import Menu from 'containers/Menu'
import GameTable from 'containers/GameTable'
import PvpConfig from 'containers/PvpConfig'
import PveConfig from 'containers/PveConfig'
import Game from 'containers/Game'

// CSS styles
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Menu}/>
        <Route path="/pvp" component={PvpConfig}/>
        <Route exact path="/pve" component={PveConfig}/>
        <Route path="/game" component={Game}/>
        {/* <Route exact path="/game/results" component={GameResults}/> */}
      </Switch>
      <GameTable />
      <Footer />
    </div>
  )
}

export default App