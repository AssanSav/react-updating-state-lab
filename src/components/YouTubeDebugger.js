import React, { Component } from "react"

export default class YouTubeDebugger extends Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: "1080p"
                }
            }
        }
        this.handleBitrateOnClick = this.handleBitrateOnClick.bind(this)
        this.handleResolutionWhenClicked = this.handleResolutionWhenClicked.bind(this)
    }

    handleBitrateOnClick() {
        this.setState(previousState => {
            return {
                settings: {
                    ...this.state.settings,
                    bitrate: 12
                }
            }
        })
    }

    handleResolutionWhenClicked() {
        this.setState(previousState => {
            return {
                settings: {
                    ...this.state.settings,
                    video: {
                        ...this.state.video,
                        resolution: "720p"
                    }
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleBitrateOnClick}>Click Me To Update the Bitrate!</button>
                <button className='resolution' onClick={this.handleResolutionWhenClicked}>Click Me To Update the Resolution</button>
            </div>
        )
    }
}