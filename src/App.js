/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    addingFriend: '',
    addingImage: '',
    friends: [
      {
        name: 'Patrick',
        image: 'http://breaktheframe.com/wp-content/uploads/2017/05/leadership-perils-commiserating.jpg'
      }
    ]
  }

  addFriend = () => {
    let updatedFriends = [...this.state.friends]
    updatedFriends.push({
      name: this.state.addingFriend,
      image: this.state.addingImage
    })

    this.setState({
      friends: updatedFriends,
      addingFriend: "",
      addingImage: ""
    })

  }

  addingFriend = (e) => { 
    this.setState({
      addingFriend: e.target.value
    })
  }

  addingImage = (e) => { 
    this.setState({
      addingImage: e.target.value
    })
  }

  updateFriend = (e) => { 
    this.setState({
      addingFriend: e.target.value
    })
  }

 
  render() {
    return (
      <div className="App">
        <input placeHolder='name' value={this.state.addingFriend} onChange={this.updateFriend}></input>
        <input placeHolder='Image URL' value={this.state.addingImage} onChange={this.addingImage}></input>
          <button onClick={this.addFriend}>Add friend</button>
         
        {
          this.state.friends.map((friend) => (
            <div className = 'friend'>
            <h2 className = 'name'>{friend.name}</h2>
              {friend.image ? <img className="image" src={friend.image} alt="some" /> : <div className='image'> <h6 style={{marginTop: '40px'}}>No image for {friend.name}</h6> </div> }
              </div>
          ))
        }
        
      </div>
    );
  }
}

export default App;


