import React, {Component} from 'react';
import Contact from './components/Contact'
    
    class App extends Component {
      state = {
        contacts:[]
      }

      //when the compotent is mounted, fetches data from API and copies JSON into state as contacts
      componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data)=>{
          this.setState({contacts : data})
        })
        .catch(console.log)
      }
      render () {
        return (
          <Contact contacts={this.state.contacts} />
        )
      }
    }
    
    export default App