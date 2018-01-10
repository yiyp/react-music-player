import React from 'react';
import Header from './components/header';
import Progress from './components/progress';

class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			progress: 0
		};
	}
	
	componentDidMount() {
		$('#player').jPlayer({
			ready: function (){
				$(this).jPlayer('setMedia', {
					mp3: 'http://www.jplayer.cn/demos/audio/ogg/%E5%B0%8F%E5%9F%8E%E5%A4%A7%E4%BA%8B.ogg'
				}).jPlayer('play');
			},
			supplied: 'mp3,oga,m4a',
			wmode: 'window'
		});
		$('#player').bind($.jPlayer.event.timeupdate, (e) => {
			this.setState({
				progress: Math.round(e.jPlayer.status.currentTime)
			});
		})
	}
	
	componentWillUnmount() {
		$('#player').unbind($.jPlayer.event.timeupdate);
	}
	
	render() {
		return (
			<div>
				<Header />
				<Progress
					progress={this.state.progress}
				>
				</Progress>
			</div>
		);
	}
}

export default Root;