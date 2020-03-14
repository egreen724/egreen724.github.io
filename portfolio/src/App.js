import React from 'react';
import './App.css';
import Menu from './components/menu.js'
import About from './components/about.js'
import ProjectContainer from './components/projectContainer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>

      <body>
        <img id="workspace" src="https://s3.us-east-2.amazonaws.com/eyg.portfolio/workspace.jpg"/>
        <ProjectContainer />
        <About />
      </body>
    </div>
  );
}

export default App;
