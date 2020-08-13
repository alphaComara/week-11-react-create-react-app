import React from 'react';
import logo from './logo.svg';
import './App.css';


class Clock extends React.component{
  constructor(){
    super(props)
   
   this.state = {
     displayTime:''
   }
    
  }

  componentDidMount (){
    this.timerId = setInterval(()=>{
      this.tick()
    }, 1000)
  }
  
  tick (){

    this.setState({
      displayTime: "9:05PM"
    })
  }


  render () {
    const dispayTime = this.state.displayTime;
  
    
    return (
      <div className="Clock">
        <h2>this is {displayTime}</h2>

      </div>

    )

  }
}


function App(){
  return ( 
  <div className="App">
    <header className="App-header">
    <img scr={logo} className="" alt="logo" />
    </header>
    <Clock/>
  </div>

      


)

}
export default App;
