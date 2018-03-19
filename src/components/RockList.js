import React, {Component} from 'react'
import Rock from './Rock'
import AddRock from './AddRock'

class RockList extends Component {
  state = {
    message: 'My class is no fun and uncreative today',
      rocks: [
           {
            name: 'stoner',
            type: 'igenous',
            age: 420,
            color: 'green',
            hardness: 'rock solid'
          },
          {
            name: 'limey the limestone',
            type: 'metamorphic',
            age: 20,
            color: 'yellow',
            hardness: 'soft'
        }
    ]
  }

  updateMessage = (e) => {
    this.setState({message: e.target.value})
  }



  addRock = (rockName) => {
    let newRock = {
      name: rockName,
      type: 'blah',
      hardness: 'blah',
      age: 'blah'
    }
    this.setState({
      rocks: [...this.state.rocks, newRock],
      newRock: ''
    })
  }
  render() {
    let rockElements = this.state.rocks.map((rock, i) => <Rock key={i} {...rock} />)
    return (
      <div>
      <h1>Important Message! {this.state.message} </h1>
        <h3> list of rocks for you to mingle with </h3>
        <input onChange={this.updateMessage.bind(this)}/>
        {rockElements}
        <AddRock addRock={this.addRock} />
      </div>
    )
  }
}

export default RockList
