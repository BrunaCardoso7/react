import React, { useState } from "react";

const Hooks = ()=>{
    const [ nome, setNome ] = useState('');
    return(
        <>
           Nome: <input type="text" value={ nome } onChange={ evt =>{ setNome(evt.target.value)} }/>
          <br/>
          <hr/>
          <p>olá, { nome }</p>
        </>
    );
}
export { Hooks };