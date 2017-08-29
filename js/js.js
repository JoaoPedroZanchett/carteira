var React = React.createClass({
	render: function(){
		return(
			<h1>{this.props.frase}</h1>
		);
	},
})

ReactDOM.render(
	<React frase="Olha só"></React>,
	document.getElementById("main")
);
