import React from 'react';
import './progress.less';

class Progress extends React.Component {
	constructor(props) {
		super(props);
		this.changeProgress = this.changeProgress.bind(this);
	}
	
	changeProgress(e) {
		let progressBar = this.progressBar;
		let progress = (e.clientX - progressBar.getBoundingClientRect().left)/progressBar.clientWidth;

		this.props.onProgressChange && this.props.onProgressChange(progress);
	}
	
	render() {
		return (
			<div className="components-progress" ref={(divDom) => { this.progressBar = divDom; }} onClick={this.changeProgress}>
				<div className="progress" style={{width:`${this.props.progress}%`, background: this.props.barColor}}></div>
			</div>
		)
	}
}

//由于是用ES6 class语法创建组件，其内部只允许定义方法，而不能定义属性，class的属性只能定义在class之外。所以defaultProps要写在组件外部。
Progress.defaultProps = {
  barColor: '#2f9842'
};

export default Progress;
