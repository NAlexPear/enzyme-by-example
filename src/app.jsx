import React, { PureComponent } from 'react'


class App extends PureComponent {
  callOnMount(phrase){
    console.log(phrase);
  }

  componentDidMount(){
    this.callOnMount('I was called on mount!');
  }

  render(){
    return <h1>Hello, world</h1>;
  }
}

export default App;
