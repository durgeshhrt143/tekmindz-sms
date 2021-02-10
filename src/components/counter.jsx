import React, { Component,Fragment } from 'react';
class Counter extends Component {
    // constructor(props){
    //     super(props);
    //         console.log('Counter constructor'); 
        
    // }
    // componentDidMount() {
    //     console.log('Counter mounted');
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log('Counter cdu prevProps',prevProps);
    //     console.log('Counter cdu prevState',prevState);
    // }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Counter csu nextProps',nextProps);
        console.log('Counter csu nextState',nextState); 
        return true;
       
      }
    formateCount(){
        const {value} = this.props.counter;
       return value === 0 ? 'zero':value;
    }
    renderTag(){
        const {value,tags} = this.props.counter;
        if(tags.length === 0 ) return(<p>there are no tags</p>);
        return tags.map(tag=><li key={tag}>{tag}</li>)
    }
    render() { 
        console.log('Counter render()');
        return (
            <div className="row">
            <div className="col-1">
            <span className={this.getBadgeClass()}>{this.formateCount()}</span>
            </div>
            <div className="col">
            <button onClick={()=>this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>+</button>
            <button disabled={this.props.counter.value===0} onClick={()=>this.props.onDecrement(this.props.counter)} className='btn btn-secondary btn-sm m-2'>-</button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm '>X</button>
            </div>
            </div> 
            );
    }

    getBadgeClass() {
        const { value } = this.props.counter;
        let classes = 'badge m-2 badge-';
        classes += value === 0 ? 'warning' : 'primary';
        return classes;
    }
}
 
export default Counter;