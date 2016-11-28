const React = require('react')

class YouTubeDebugger extends React.Component{
	constructor(props){
		super(props)
		this.state = {
  errors: [],
  user: null,
  settings: {
    bitrate: 8,
    video: {
      resolution: '1080p'
    }
  }
}
	this.handleClickBit = this.handleClickBit.bind(this)
	this.handleClickRes = this.handleClickRes.bind(this)
	}

	handleClickBit(){
		this.setState({settings: Object.assign({}, this.state.settings, {bitrate: 12})
			})
	}
	handleClickRes(){
		this.setState({settings: Object.assign({}, this.state.settings, {video: {resolution: '720p'}})
	})
}

	render(){
		return(
			<div >
			<button className="bitrate" onClick={this.handleClickBit}>bitrate</button>
			<button className="resolution" onClick={this.handleClickRes}>resolution</button>
			</div>
			)
	}
}

module.exports = YouTubeDebugger;