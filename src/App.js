import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  // constructor(){
  //   super();
  //   console.log('app constructor');
  // }
  // componentDidMount() {
  //   console.log('app mounted'); 
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('app cdu prevProps',prevProps);
  //   console.log('app cdu prevState',prevState);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('app csu nextProps',nextProps);
    console.log('app csu nextState',nextState);
    return true;
     
  }
  state = { 
    counters:[
        {id:1,value:1},
        {id:2,value:2},
        {id:3,value:3},
        {id:4,value:0},
    ]
 }
handleReset = () => {
    const counters = this.state.counters.map(c=> {
        c.value = 0;
        return c;
    });
    this.setState({counters});
};
handleIncrement=(counter)=>{
const counters = [...this.state.counters];
const index = counters.indexOf(counter);
counters[index] = {...counter};
counters[index].value++;
this.setState({counters});   
};
handleDecrement =(counter)=>{
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value--;
  this.setState({counters});   
  };
handleDelete = (id) =>{
    const counters = this.state.counters.filter(c=>c.id !== id);
    this.setState({counters});
};
  render() { 
    const {counters} = this.state;
    console.log('app render()');
    return ( 
      <>
      <NavBar count={counters.filter(item=> item.value >0).length}/>
      <main className="container">
        <Counters 
        counters={counters}
        onReset={this.handleReset}
        onIncrement = {this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete= { this.handleDelete}
        />
      </main>
      </>
     );
  }
}
 
export default App;
