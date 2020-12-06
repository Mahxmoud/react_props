import React, { Component } from 'react'

export class Profile extends Component {
    render() {
        return (
            <div>
                <img src={this.props.children} alt='' style={{ height: '200px', width: '200px', borderRadius: '50%' }} />
                <h1>{this.props.name} </h1>
                <h3>{this.props.profission}</h3>
                <p>{this.props.bio}</p>
                {this.props.handleName(this.props.name)}
            </div>
        )
    }
}
