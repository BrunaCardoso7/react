import React from "react";

class App3 extends React.Component{
    constructor(props){
        // eslint-disable-next-line no-unused-expressions
        super(props);
        this.state = { nome: ''};   
        this.changeName = this.changeName.bind(this);
    }
    changeName = (event) => {
        this.setState({ nome: event.target.value })
    }
    render(){
        return(
            <>
                <input type="text" value={ this.state.nome } onChange={ this.changeName }/>
                <p>ola {this.state.nome}</p>
            </>
        )
    }
}
export { App3 }