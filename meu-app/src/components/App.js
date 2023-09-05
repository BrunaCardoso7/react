import React, { useState, useEffect } from "react";

const App = ()=>{
    const [ nome, setNome ] = useState(undefined);
    useEffect(
        ()=>{
          if(nome === undefined){
            setNome(sessionStorage.getItem('nome') || '')
          } 
          
          else {
            setNome(sessionStorage.setItem('nome', nome))
          }
        }, [nome]
    );
    return(
        <>
           Nome: <input type="text" value={ nome } onChange={ evt =>{ setNome(evt.target.value)} }/>
          <br/>
          <hr/>
          <p>olá, { nome }</p>
        </>
    );
}
export { App };
