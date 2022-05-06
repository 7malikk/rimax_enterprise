import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from './components/Contacts';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setTeamData(data));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home teams={teamData} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/contacts"
          exact
          element={<Contacts teamsContact={teamData} />}
        />
        <Route
          exact
          path="/contact/:name/:id"
          element={<Contact teamContact={teamData} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
