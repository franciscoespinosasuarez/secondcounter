import React from "react";

function SecondCounter(props) {
	console.log(props);
	return (
		<>
			<h1>Second Counter</h1>
			<div className="contenedor">
				<div className="digito">{props.cuatro % 10}</div>
				<div className="digito">{props.tres % 10}</div>
				<div className="digito">{props.dos % 10}</div>
				<div className="digito">{props.uno % 10}</div>
			</div>
		</>
	);
}

export default SecondCounter;
