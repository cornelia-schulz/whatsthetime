import React from 'react'
import {getTime} from '../apiClient'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: []
    }
  }

  componentDidMount() {
    getTime()
    .then(time => {
      console.log(time)
      this.setState({time})
    })
  }

  render() {
    return(
      <div>
        <h1>Time</h1>
        <ul>
          {this.state.time.map(t => {
            return <li key={t.name}>{t.name}</li>
          })}
        </ul>
      </div>
    )
  }

}
export default App