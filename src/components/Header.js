import React from 'react'

const Header = (props) => { // taper "props" dans () comme paramètre
  return (
    <header>
        <h1> {props.title} </h1> 
        {/* props.title = on récupère la valeur de .title */}
    </header>
  )
}

// on peut définir des props par défaut :

Header.defaultProps = {
    title: 'Task Tracker', // Celui sera remplacé si l'on écrit autre chose a dans le component qui se trouve dans App.js comme <Header title="Hello there"
}


export default Header