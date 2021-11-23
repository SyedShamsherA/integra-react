import './App.css';
import CounterComponent from './CounterComponent';

function App({componentName}) {
  console.log(componentName);

  const sum = (a,b) => {
    return a+b
  }


  return (
    <div className="App" style={{padding: '30px'}}>
      This is {componentName} component <br /> <br />
      The sum value is {sum(3,4)}
      <CounterComponent componentName="Counter" />
    </div>
  );
}

export default App;
