import React from 'react'
import CounterHooks from './modules/Module10_Hooks/CounterHooks'
import FetchDataEffect from './modules/Module10_Hooks/FetchDataEffect'
import ReduxCounter from './modules/Module10_Hooks/ReduxCounter'
import RefExample from './modules/Module10_Hooks/RefExample'
import RoutingApp from './modules/Module11_Routing/RoutingApp'
import PublicApiTable from './modules/Module12_API_Firebase/PublicApiTable'

function App() {
  return (
    <div>
      <h1>Module 10 - Hooks</h1>
      <CounterHooks />
      <hr />
      <FetchDataEffect />
      <hr />
      <ReduxCounter />
      <hr />
      <RefExample />

      <hr />
      <RoutingApp />

      <hr />
      <h1>Module 12</h1>
      <PublicApiTable />
    </div>
  )
}

export default App