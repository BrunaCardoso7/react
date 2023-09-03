import React from 'react';

class App2 extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props); // Use "super(props)" em vez de "super(this.props)"
      }
    render(){
    return(
      <>
        <div>
            <h1 id='title'>{ this.props.title }</h1>
            <legend id='text'>{ this.props.children }</legend>
        </div>
      </>
    )
  }
}

export default App2;
