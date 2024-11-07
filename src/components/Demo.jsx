import React from "react";

class Demo extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            country: "Nigeria",
            state: "Lagos",
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  
    }

    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.state.country}</h2>
                <h2>{this.state.state}</h2>
                <button onClick={() =>
                    this.setState({state: "Abuja"})
                }>Change state</button>
                <div className="">
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment</button>
                </div>
            </div>
        )
    }
}

export default Demo;


export class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // Change code below this line
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
      this.reset = this.reset.bind(this)
      // Change code above this line
    }
    // Change code below this line
  increment(){
    this.setState(state => ({
      count: state.count +1
    }))
  }
  decrement() {
      this.setState(state => ({
        count: state.count - 1
      }));
  }
      reset(){
        this.setState(state =>({
          count: state.count = 0
        }))
      }
    // Change code above this line
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };
