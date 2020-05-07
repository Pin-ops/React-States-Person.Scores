import React, { Component } from 'react';
import './App.css'
import Score from './components/Score';

class App extends Component {
  state={
    results:[
      {name:'Pin',subject:'React',score:100},
      {name:'Hil',subject:'Js',score:100},
      {name:'Sin',subject:'HTML',score:60},
      {name:'Kin',subject:'Node',score:90},
    ]
  }



  render() {

  let attendeeCards = this.state.results.map( (item,i) =>
    // return(
    //   <Score
    //     key={i}
    //     name={item.name}
    //     subject={item.subject}
    //     score={item.score}
    //   />
    // )

      <Score
        key={i}
        name={item.name}
        subject={item.subject}
        score={item.score}
        >created with .map ( ) function
      </Score>
    )





    return (
      <div className='App'>
            <h6>Created with .map( ) function in render</h6>
                {attendeeCards}
            <hr/>
            <h6>Created with initial values</h6>

                <Score name='Hil'
                      subject='Js'
                      score='100'
                > with initial Data </Score>
            <hr/>
            <h6>Created without .map() function </h6>

                <Score name={this.state.results[0].name} subject={this.state.results[0].subject} score={this.state.results[0].score}> without .map( ) Function </Score>

            <hr/>
            <h6>Created with .map( ) function in Return</h6>
                {this.state.results.map ( (item, i ) =>
                      <Score
                        key={i}
                        name={item.name}
                        subject={item.subject}
                        score={item.score}
                        />
                                        )
                }
      </div>
    );
  }
}

export default App;