import React, { Component } from 'react'


export default class MyclassComponent1 extends Component() {
    render(){
        return (
            <div>
                <div style = {{width: "200px", height: "200px", backgroundColor: "red"}} className='mysquare'>
                    I am a component.
                </div>
                <h3> The section is {this.props.section} </h3>
            </div>
        )
    }
}
