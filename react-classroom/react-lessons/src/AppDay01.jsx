import './App.css';
import Header from './components/day01-challenge/Header';
import AboutMe from './components/day01-challenge/AboutMe';
import StudentInformation from './components/day01-challenge/StudentInformation';
import Footer from './components/day01-challenge/Footer';

function App() {

  const welcomeName = "Josh";

  return (
   <div className="App">
     <Header />
     <h1>Welcome to React, {welcomeName}</h1>
     <h2>We just modified our root App component</h2>
     { /* <p>This is a test</p> 
        This is a comment */ }
      <h3>Create the following...</h3>
      <ul>
        <li>Create a new component in the day01-challenge folder called AboutMe</li>
        <li>h1 tag with your name</li>
        <li>p tag with the following I grew up in city/state</li>
        <li>Have an unordered list with 3 places you have visited</li>
      </ul>
      <p>Export the component, and import the new component into the App.jsx file.</p>
      <hr />
      <h1>Bonus</h1>
      <p>Make the h1 tag (your name) be red in color using inline styling</p>
      <p>Make the li's no bullets -inline styling</p>
      <AboutMe />        
      <StudentInformation studentName="Josh" grade="A" subject="Math" />
      <StudentInformation studentName="Joe" grade="A" subject="Physics" />
      <StudentInformation studentName="Sophia" grade="A" subject="Science" />
      <Footer />
   </div> 
  );
}

export default App;

