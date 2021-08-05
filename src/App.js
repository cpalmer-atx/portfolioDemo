import { useState } from 'react';
import Navbar from './components/Navbar';
import SpaceX from './components/spacex/SpaceX';
import GitFinder from './components/gitFinder/GitFinder';
import Waypoints from './components/waypoints/Waypoints';
import './App.css';

const App = () => {
  const [ app, setApp ] = useState(0);

  const active = [
    <GitFinder />,
    <SpaceX />,
    <Waypoints />
  ]

  const view = {
    activeApp: active[app],
  }

  // Set active app
  const viewApp = (index) => {
    view.activeApp = setApp(index);
  }

  return (
    <div className="root-container">
      <Navbar toggleApp={viewApp}/>
      {view.activeApp}
    </div>
  );
}

export default App;
