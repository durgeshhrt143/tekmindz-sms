import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    // constructor(props){
    //     super(props)
    //     console.log('Counters constructor');
    // }
    // componentDidMount() {
    //     console.log('Counters mounted');   
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log('Counters cdu prevProps',prevProps);
    //     console.log('Counters cdu prevState',prevState);
    // }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Counters csu nextProps',nextProps);
        console.log('Counters csu nextState',nextState); 
        return true;
       
      }
    render() { 
        console.log('Counters render()'); 
        const {counters,onReset,onIncrement,onDecrement,onDelete} = this.props;
        return ( 
            <div>
                <button className='btn btn-sm btn-primary' onClick={onReset}>Reset</button>
                {counters.map(counter=> <Counter 
                                        key={counter.id}
                                        counter={counter}
                                        onIncrement={onIncrement}
                                        onDecrement={onDecrement}
                                        onDelete={onDelete} />)}
            </div>
         );
    }
}
 
export default Counters;