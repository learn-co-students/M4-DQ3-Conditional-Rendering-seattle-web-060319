import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: 'item active',
      photo: 'item',
      cocktail: 'item',
      pokemon: 'item'
    }
  }
  handleChangeState = ev => {
    let newState = {
      profile: 'item',
      photo: 'item',
      cocktail: 'item',
      pokemon: 'item'
    }
    newState[ev.target.id] = 'item active'

    this.setState(newState)
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    let detailsToDisplay = () => {
      let display = (Object.keys(this.state).find(key => this.state[key] === 'item active'))

      if (display === 'profile') {
        return <Profile />
      } else if (display === 'photo') {
        return <Photos />
      } else if (display === 'cocktail') {
        return <Cocktails />
      } else if (display === 'pokemon') {
        return <Pokemon />
      }
    }


    return (
      <div>
        <MenuBar
          handleChangeState={this.handleChangeState}
          profile={this.state.profile}
          photo={this.state.photo}
          cocktail={this.state.cocktail}
          pokemon={this.state.pokemon}
        />
      {detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
