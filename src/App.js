
// import About from './About';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';


function App() {
  return (
    <>
<Navbar title="TextUtils" about="About us"/>
<div className="container">
  <TextForm Heading ="Enter the text to analyze "/>
</div>
{/* <About/> */}
    </>

  );
}

export default App;
