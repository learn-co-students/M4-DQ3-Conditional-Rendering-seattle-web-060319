import React from 'react'

const MenuBar = (props) => {
  return (
    <div className="ui four item menu">
      <a className={props.profile} id="profile" onClick={props.handleChangeState}>
        <i className="user large icon" id="profile" />
      </a>
​
      <a className={props.photo} id="photo" onClick={props.handleChangeState}>
        <i className="photo large icon" id="photo" />
      </a>
​
      <a className={props.cocktail} id="cocktail" onClick={props.handleChangeState}>
        <i className="cocktail large icon" id="cocktail" />
      </a>
​
      <a className={props.pokemon} id="pokemon" onClick={props.handleChangeState}>
        <i className=" themeisle large icon" id="pokemon" />
      </a>
    </div>
  )
}
export default MenuBar
