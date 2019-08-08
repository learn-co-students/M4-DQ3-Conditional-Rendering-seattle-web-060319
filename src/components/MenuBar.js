import React from 'react'
import { Pokemon } from './Pages';

class MenuBar extends React.Component {
  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?
  
  */

  state = {
    profile: "item active",
    pokemon: "item",
    cocktail: "item",
    photo: "item"
  }

  handleChangeActive = (e) => {
    let newActive = e.target.id
    this.setState(prevState => {
      for (const key in prevState) {
        if (prevState.hasOwnProperty(key)) {
          prevState[key] = "item"
        }
      }
      prevState[newActive] = "item active"
      return prevState
    })
  }

  handleClick = (e) => {
    this.handleChangeActive(e)
    this.props.changePageState(e.target.id)
  }

  render(){
  return (
    <div className="ui four item menu">
      <a  onClick={this.handleClick} className={this.state.profile} id="profile">
        <i className="user large icon" id="profile"/>
      </a>

      <a onClick={this.handleClick} className={this.state.photo} id="photo">
        <i className="photo large icon" id="photo"/>
      </a>

      <a onClick={this.handleClick} className={this.state.cocktail} id="cocktail">
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a onClick={this.handleClick} className={this.state.pokemon} id="pokemon"> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}}

export default MenuBar
