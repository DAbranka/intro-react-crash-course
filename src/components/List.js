import PropTypes from 'prop-types'

import React from 'react'
import Button from './Button'
import Header from './Header'

const List = ({titre}) => { // autre moyen d'écrire les props
    
    const onClick = () => {
        console.log('click')
    }

  return (
    <div style={headerStyle}>
        <h1 className='listHeader'>
            {titre}
        </h1>
        <Button text="Default Color" oncClick={onClick} />
        <Button color="yellow" text="Hiya" />
        <Button color="greenyellow" text="Hiya" />
    </div>
  )
}

// todo: A revoir !
Header.propTypes = {
    // On récupère "titre"
    titre: PropTypes.string,
}

// Possible de créer des var/const/let pour y mettre du css
const headerStyle = {
    color: 'red',
    backgroundColor: 'black',
}

export default List