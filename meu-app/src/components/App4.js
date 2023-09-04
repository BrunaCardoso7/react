import React from "react";

class App4 extends React.Component{
    constructor(props){
        // eslint-disable-next-line no-unused-expressions
        super(props);
        this.state = { nome: undefined, txtNome: ''};  
    }
    changeTxtName = (event) => {
        this.setState({ txtNome: event.target.value })
    }
    persistNome = ()=>{
        this.setState(
            {
                nome: this.state.txtNome
            }
        )
    }
    render(){
        
        const renderInput = ()=>{
            return(
                <>
                    <input type="text" value={ this.state.nome } onChange={ this.changeTxtName }/>
                    <button onClick={ this.persistNome }>SHOW TEXT</button>
                </>
            )
        }

        const renderMenssage = ()=>{
            return(
                <>
                    <p>ola {this.state.nome}</p>
                </>
            )
        }
        return !this.state.nome? renderInput() : renderMenssage();
    }
}
export { App4 }