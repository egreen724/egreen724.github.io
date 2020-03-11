import React from 'react';
import './App.css';
import Menu from './components/menu.js'
import About from './components/about.js'
import Footer from './components/footer.js'
import ProjectContainer from './components/projectContainer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>

      <body>
        <ProjectContainer />
        <About />
        <Footer />
      </body>
    </div>
  );
}

export default App;
