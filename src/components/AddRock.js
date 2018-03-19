import React, {Component} from 'react'

class AddRock extends Component {
  state = {newRock: ''}
  handleChange = (e) => {
    this.setState({newRock: e.target.value})
  }

  handleAddRock = () => {
    this.props.addRock(this.state.newRock)
    this.state({newRock: ''})
  }
  render() {
    return(
      <div>
        <label> new rock name</label>
        <input onChange={this.handleChange} />
        <button onClick={this.handleAddRock}/>
      </div>
    )
  }
}

export default AddRock
