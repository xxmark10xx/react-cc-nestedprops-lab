import React, { Component } from 'react';
import Score from './Score.js'


class Student extends Component {
    render() {
        const scoresMapped =  this.props.scores.map((score, index) =>{
            return (
                <Score 
                    key={`score-${index}`}
                    date={score.date}
                    score={score.score}
                />
            )
        })
        return(
            <div>
                <h4>{this.props.name}</h4>
                <p>Bio: {this.props.bio}</p>

                {scoresMapped}
                
               
            </div>
        )
    }
}

export default Student