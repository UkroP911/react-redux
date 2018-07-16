import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import TownList from './components/TownList';

function mapStateToProps (state) {
    return (
        {
            towns: state.map((name, id) =>
                state[id].name
            )
        }

    )
}

class App extends Component {
  render() {
      const {...towns} = this.props;
    return (
      <div className="App">
          <TownList town={towns}/>
      </div>
    );
  }
}
export default connect(mapStateToProps)(App);
