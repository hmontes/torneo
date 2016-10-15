// Called by '/imports/client/routes.js'
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

const MainLayout = (props) => (
	<div>
		<nav className="light-blue" role="navigation">
			<div className="nav-wrapper container">
				<a id="logo-container" href="#" className="brand-logo"><img src="img/enterrisk-logo.png" /></a>
  				<ul className="right hide-on-med-and-down">
					<li><a href="#">Interfaz para el Banco BCI</a></li>
  				</ul>
  				<ul id="nav-mobile" className="side-nav">
					<li><a href="#">Navbar Link</a></li>
  				</ul>
  				<a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
			</div>
		</nav>
		{props.main}
	</div>
);

export default createContainer(props => {
	return{
		user: Meteor.user(),
	};
}, MainLayout)
