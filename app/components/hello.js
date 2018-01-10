import React from 'react'
import './hello.less'

/*let Hello = React.createClass({
	render() {
		return (
			<div className="hello-component">
				Hello, React
			</div>
		)
	}
});*/
class Hello extends React.Component{
	render() {
		return (
			<div className="hello-component">
				Hello, React
			</div>
		)
	}
}

export default Hello;