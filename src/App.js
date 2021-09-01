
// import About from './About';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React , {useState} from 'react'
import Alert from './Component/Alert';





function App() {

const [mode, setmode] = useState('light')

const [Text, setText] = useState('Enable Dark Mode')

const [alert, setalert] = useState("null")

const showalert=(message,type)=>{
 setalert({
  message : message,
   type : type
 })
 setTimeout(() => {
   setalert(null)
 },1500);

}

 const toggleMode=() =>{

  if(mode === 'light'){
    setmode('dark')
    setText('Disable Dark Mode')
    document.body.style.backgroundColor ="Black"
    showalert("Dark mode has been enabled","success")
  }else{
    setmode('light')
    setText('Enable Dark Mode')
    document.body.style.backgroundColor ="white"
    showalert("Light mode has been enabled","success")
  }
}

  return (
    <>
   
<Navbar title="playWith_Text" about="About us" mode={mode} toggleMode={toggleMode} Text={Text}/>
<Alert alert ={alert}/>
<div className="container">
  <TextForm Heading ="Enter the text to analyze " showalert={showalert}  mode={mode} />
</div>
{/* <About/> */}


    </>

  );
}

export default App;
