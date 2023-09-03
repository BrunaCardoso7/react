import React from 'react';

class App extends React.Component{
  render(){
    return(
      <>
        <p>
          meu primeiro parafrafo
        </p>
        <p>
          meu segundo parágrafo
        </p>
        <p>
          { new Date().toLocaleDateString('pt-BR') }
        </p>
      </>
    )
  }
}

export default App;
