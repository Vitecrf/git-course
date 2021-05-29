
import './App.css';

import React, {Component} from 'react';
import Header from "./component/Header";
import Main from "./component/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
            color: true
    }
  }

  clickMe = () =>{
      alert('Props in the element')
      this.setState({color: !this.state.color})
  }

  render() {
    return (
        <div>
          <Header/>
          <Main clickMe={this.clickMe} color={this.state.color}/>
        </div>
    );
  }
}

export default App;