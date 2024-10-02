import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>

      <Navigation />

       {/* Next, we need to map the routes to an actual rendering by using 
      React Router's Route component: */}
      
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

const Navigation = () => {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

const Home = () => {
  return (
    <>
      <main style={{ padding: '1rem 0' }}>
        <h2>Welcome to the homepage!</h2>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};


const About = () => {
  return (
    <>
    <main>
      <h2>Who are we?</h2>
      <p>
        That feels like an existential question, don't you
        think?
      </p>
    </main>
    <nav>
      <Link to="/home">Home</Link>
    </nav>
  </>

  );
};

const Users = () => {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Users</h2>
    </main>
  );
};


export default App;
