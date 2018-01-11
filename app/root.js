import React from 'react';
import Header from './components/header';
import Progress from './components/progress';

let duration = null;
class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			progress: 0
		};
	}
	
	/*static get defaultProps(){
		return {
			barColor: '#2f9842'
		}
	}*/
	
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

			duration = e.jPlayer.status.duration;
			this.setState({
				progress: e.jPlayer.status.currentPercentAbsolute
			});
		})
	}
	
	componentWillUnmount() {
		$('#player').unbind($.jPlayer.event.timeupdate);
	}
	
	progressChangeHandler(progress) {
		$('#player').jPlayer('play', duration * progress);
	}
	
	render() {
		return (
			<div>
				<Header />
				<Progress
					progress={this.state.progress} onProgressChange={this.progressChangeHandler} barColor="#e26da7"
				>
				</Progress>
			</div>
		);
	}
}

export default Root;