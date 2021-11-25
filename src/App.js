import React, {useState, useEffect } from 'react';
import './App.css';
import CounterComponent from './CounterComponent';
import CardComponent from './Card';

function App({props}) {
  const [toggleCounterComponent, setToggleCounterComponent] = useState(true);
  const [toggleCard, setToggleCard] = useState(true);

  useEffect(() => {
    console.log("mounting and updating phase");
  })

  useEffect(() => {
    console.log("only mounting phase");
  },[])

  useEffect(()=>{
    console.log("mounting and updating phase of toggleCounterComponent");
  },[toggleCounterComponent])

  useEffect(()=>{
    console.log("toggleCard")
  },[toggleCard])


  useEffect(() => {
    console.log("mounting and updating phase of both toggleCounterComponent and toggleCard")
  },[toggleCounterComponent,toggleCard])


  const sum = (a,b) => {
    return a+b

  }

  const toggleComponent = (valueFromChild) => {
    setToggleCounterComponent(!valueFromChild);
  }


  return (
    <div className="App">
      <button onClick={() => setToggleCard(!toggleCard)}>card</button><br />
      {toggleCard ? <CardComponent heading="App component" subheading="Home component"
      description="this is home component" 
      toggleFunctionality={(toggle)=> toggleComponent(toggle)}/>:<></>}
      <br /> 
      The sum value is {sum(3,4)} <br/>
      {toggleCounterComponent ? <CounterComponent componentName="Counter" />:<></>}
    </div>
  );
}

export default App;
