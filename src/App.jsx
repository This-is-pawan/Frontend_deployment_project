import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/pages/Projects'
import Deployments from './components/pages/Deployments'
import Logs from './components/pages/Logs'
import Analytics from './components/pages/Analytics'
import SpeedInsights from './components/pages/SpeedInsights'
import Observability from './components/pages/Observability'
import Firebwall from './components/pages/Firewall'
import Cdn from './components/pages/Cdn'
import Domains from './components/pages/Domains'
import Integrations from './components/pages/Integrations'
import Storage from './components/pages/Storage'
import { Navbar } from './components/Navbar'
import SideBar from './components/SideBar'
import Enviornment from './components/pages/Enviornment'

const App = () => {
  return (
    <div className=''>
      <Navbar />
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path='/sidebar' element={<SideBar/>}/>
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/deployments" element={<Deployments/>}/>
  <Route path="/logs" element={<Logs/>}/>
  <Route path="/analytics" element={<Analytics/>}/>
  <Route path="/speed-insights" element={<SpeedInsights/>}/>
  <Route path="/observability" element={<Observability/>}/>
  <Route path="/firewall" element={<Firebwall/>}/>
  <Route path="/cdn" element={<Cdn/>}/>
  <Route path="/environment-variables" element={<Enviornment/>}/>
  <Route path="/domains" element={<Domains/>}/>
  <Route path="/integrations" element={<Integrations/>}/>
  <Route path="/storage" element={<Storage/>}/>
  <Route path="/flags" element={''}/>
  <Route path="/agent" element={''}/>
  <Route path="/ai-gateway" element={''}/>
  <Route path="/sandboxes" element={''}/>
  <Route path="/workflows" element={''}/>
  <Route path="/usage" element={''}/>
  <Route path="/support" element={''}/>
  <Route path="/settings" element={''}/>
  
</Routes>
    </div>
  )
}

export default App