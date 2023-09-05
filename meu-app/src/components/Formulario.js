import React from "react";

class Formulario extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor( props ){
        super( props )
        this.state = {
            nome: '',
            linguagem: 'javascript',
            tipo: 'programador',
            dedico: true,
            bio: ''
        }
        this.handleSubmit = (event)=>{
            event.preventDefault(); // $FlowFixMe - flow is not aware of `unknown` in IE
            console.log(this.state)
        }
        this.changeName = (event)=>{
            this.setState({ nome: event.target.value})
        }
        this.changeSelect = (evt)=>{
            this.setState({linguagem: evt.target.value})
        }
        this.changetipo = (evt)=>{
            this.setState({tipo: evt.target.value})
        }
        this.clickDedico = (evt)=>{
            if(evt.target.checked){
                this.setState({dedico: true})
            } else {
                this.setState({dedico: false})
            }
        }
        this.changeBio = (evt)=>{
            this.setState({bio: evt.target.value})
        }
    }
    render(){
        return(
            <>
                <form onSubmit={ this.handleSubmit }>
                    <label>
                        nome: <input type="text" value={ this.state.nome } onChange={ this.changeName }></input>
                    </label>
                    <br/>
                    <label>
                        linguagem favorita:
                        <select value={ this.state.linguagem } onChange={ this.changeSelect } >
                            <option>Python</option>
                            <option>Javascript</option>
                            <option>Java</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        ocupação profissional
                    </label>
                        <input type="radio" checked={ this.state.tipo == 'programador'} id="opt1" onChange={ this.changetipo } value="programador"/> <label for="opt1">Programador</label>
                        <input type="radio" checked={ this.state.tipo == 'estudante'} id="opt2" onChange={ this.changetipo } value="estudante"/> <label for="opt2">Estudante</label>
                    <br/>
                    <label>
                        <input type="checkbox" value={this.state.dedico} onClick={ this.clickDedico }></input>
                        Sim, eu separo 4 horas do dia para estudar programação!
                    </label>
                    <br/>
                    <label>
                        Bio|Descrição
                        <br/>
                        <textarea value={this.state.bio} onChange={ this.changeBio }>

                        </textarea>
                    </label>
                    <br/>
                    <input type="submit" value='Salvar'/>

                </form>
            </>
        );
    }
}
export { Formulario }