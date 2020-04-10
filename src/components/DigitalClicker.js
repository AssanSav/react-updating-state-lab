import React, { Component } from "react"

export default class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
        this.simulate = this.simulate.bind(this)
    }

    simulate() {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.simulate}>{this.state.timesClicked}</button>
            </div>
        )
    }
}