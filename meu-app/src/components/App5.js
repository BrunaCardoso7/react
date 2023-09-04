import React from "react";

class App5 extends React.Component{
    constructor(props){
        // eslint-disable-next-line no-unused-expressions
        super(props);
        this.state = { nome: undefined, txtNome: ''};  
    }
    changeTxtName = (event) => {
        this.setState({ txtNome: event.target.value })
    }
    componentDidMount = () => {
        const nome = sessionStorage.getItem('nome')
        if (nome){
            this.setState({ nome });
        }
    }
    persistNome = ()=>{
        this.setState(
            {
                nome: this.state.txtNome
            }
        )
        sessionStorage.setItem('nome', this.state.txtNome)
    }
    render(){
        
        const renderInput = ()=>{
            return(
                <>
                    <input type="text" value={ this.state.nome } onChange={ this.changeTxtName }/>
                    <button onClick={ this.persistNome }>Salvar</button>
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
export { App5 }