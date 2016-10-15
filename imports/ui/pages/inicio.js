// Called by '/imports/client/routes.js'
import React from 'react';

class Inicio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {ingreso: "0", tarjeta: "0", educacion: "0", creditos: "0"};
	}

	componentDidMount() {
		$('select').material_select();
	}

	handleClick() {
		var edad = this.refs.edad.value;
		if (edad >= 30) {
			datos = Meteor.call('api')

			console.log(datos);

		}

	}

	render() {
		return(
			<div className="container">

				<form className="col s12">
				<div className="input-field col s6">
	 				<input placeholder="Edad" id="Edad" ref="edad" type="text" className="validate" />
   				</div>

					<div className="input-field col s12">
						<select onChange={this.ingreso} value={this.state.ingreso}>
						  	<option value="0" disabled></option>
						  	<option value="1">Alto</option>
						  	<option value="2">Medio</option>
						  	<option value="3">Bajo</option>
						</select>
						<label>Ingresa el nivel de ingreso</label>
					</div>

					<div className="input-field col s12">
						<select onChange={this.tarjeta} value={this.state.tarjeta}>
						  	<option value="0" disabled></option>
						  	<option value="1">Menos de 5</option>
						  	<option value="2">5 o mas</option>
						</select>
						<label>Ingresa el numero de tarjeta de credito que posee</label>
					</div>

					<div className="input-field col s12">
						<select onChange={this.educacion} value={this.state.educacion}>
						  	<option value="0" disabled></option>
						  	<option value="1">Enseñanza media</option>
						  	<option value="2">Universitaria</option>
						</select>
						<label>Ingresa tu nivel de educación</label>
					</div>

					<div className="input-field col s12">
						<select onChange={this.creditos} value={this.state.creditos}>
						  	<option value="0" disabled></option>
						  	<option value="1">Ninguno o 1</option>
						  	<option value="2">Más de 2</option>
						</select>
						<label>Ingresa el numero de creditos automotrices</label>
					</div>

					<a className="btn waves-effect waves-light" onClick={this.handleClick.bind(this)}>Estimar el riesgo crediticio</a>
				</form>



			</div>
		);
	}
}

export default Inicio;
