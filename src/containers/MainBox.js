import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    currentPage: <Profile />
  }

  changePageState = (currentPage) => {
    if (currentPage == "profile") currentPage = <Profile />
    else if (currentPage == "cocktail") currentPage = <Cocktails />
    else if (currentPage == "pokemon") currentPage = <Pokemon />
    else if (currentPage == "photo") currentPage = <Photos />
    this.setState({
      currentPage
    })
  }

  render() {


    return (
      <div>
        <MenuBar changePageState={this.changePageState}/>
        {this.state.currentPage}
      </div>
    )
  }

}

export default MainBox
