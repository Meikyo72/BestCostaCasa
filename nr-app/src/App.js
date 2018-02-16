import React, { Component } from 'react';
import logo from './logo.gif';
import './App.css';
import fireB from './fireB';

function getEstateData(setTheState) {
  fireB.database().ref('bcc/').on('value', function(snapshot, prevChildKey){
    let estateData = snapshot.val();
    setTheState(estateData);
  });
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { estates: []
    };
    this.setTheState = this.setTheState.bind(this);
  }
  componentWillMount() {
      getEstateData(this.setTheState);
      }
  setTheState(estateData) {
    this.setState({
      estates: [estateData].concat(this.state.estates)
    });
  }
  render() {
    let properties = Object.keys(this.state.estates);
    let estateList = properties.map( p => this.state.estates[p] );
    let realestate = JSON.stringify(estateList);
    //const newEstateList = estateList.map( myEstate => <ListItem key={myEstate.objectKey} internalID={myEstate.internalID} adress={myEstate.adress}/>);
    console.log(realestate);
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to NIELSEN Estate</h1>
        </header>
        <p className="App-intro">
          Här kommer bilder och text för objekt.
        </p>
        <p>
          {realestate}
        </p>
      </div>
    );
  }
}
class ListItem extends React.Component {
  render() {
    return <li key={this.props.key}>{this.props.internalID} and {this.props.adress} somemore</li>;
  }
}

export default App;
