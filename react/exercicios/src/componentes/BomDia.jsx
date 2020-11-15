import React, { Fragment } from 'react'

export default props =>                 // props é o nome padrão do parametro do componente funcional
    <Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até Breve!</h2>
    </Fragment>

/*
Se não usar o { Fragment } no import do React
Você precisará usar as tags <React.Fragment>
export default props => 
    <React.Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até Breve!</h2>
    </React.Fragment>
*/

/*
Você também pode envolver seus componentes em uma div:
export default props => 
    <div>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até Breve!</h2>
    <div>
*/

/*
Você também pode usar um vetor pra passar os componentes (utilizando atributo key):
export default props => [
    <h1 key='h1'>Bom dia {props.nome}!</h1>
    <h2 key='h2'>Até Breve!</h2>
]
*/