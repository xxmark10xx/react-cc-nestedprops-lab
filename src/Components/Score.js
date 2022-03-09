import React, { Component } from 'react';

 class Score extends Component {
     render() {
         return (
             <div>
                 <p>Date: {this.props.date} | Score: {this.props.score}</p>
                 <hr />
                 
             </div>
         )
     }
 }

 export default Score