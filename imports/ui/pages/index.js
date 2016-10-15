// Called by '/imports/client/routes.js'
import React from 'react';

const Index = () => (
	<div>
		<div id="index-banner">
    		<div className="container">
      			<br /><br />
      			<p className="header center"><img src="img/enterrisk.png" /></p>
      			<div className="row center">
        			<h5 className="header col s12 light-blue-text">Evaluador de riesgo de crédito</h5>
      			</div>
      			<div className="row center">
        			<a href="/inicio" id="download-button" className="btn-large waves-effect light-blue">EVALUAR</a>
      			</div>
      			<br /><br />
    		</div>
  		</div>
		<div className="container">
	       <div className="section">
	         <div className="row">
	           <div className="col s12 m12">
	             <div className="icon-block">
	               <h2 className="center light-blue-text"><i className="fa fa-user" aria-hidden="true"></i></h2>
	               <h5 className="center">Predice el comportamiento de futuros clientes</h5>

	             </div>
	           </div>




	         </div>

	       </div>
	       <br /><br />

	       <div className="section">

	       </div>
	     </div>

	     <footer className="page-footer light-blue">
	       <div className="container">
	         <div className="row">
	           <div className="col l6 s12">
	             <h5 className="white-text">ENTERRISK</h5>
	             <p className="grey-text text-lighten-4">Es un servico  predictor financieero online de riesgo crediticio de futuros clientes y entrega resultados al instante</p>


	           </div>
	           <div className="col l3 s12">
	             <h5 className="white-text">Servicios</h5>
	             <ul>
	               <li><a className="white-text" href="#!">Predictor de crédito</a></li>
	               <li><a className="white-text" href="#!">Analítica de Datos</a></li>
	               <li><a className="white-text" href="#!">Proyectos</a></li>
	               <li><a className="white-text" href="#!">Recursos</a></li>
	             </ul>
	           </div>
	           <div className="col l3 s12">
	             <h5 className="white-text">Contacto</h5>
	             <ul>
	               <li><a className="white-text" href="#!">Nosotros</a></li>
	               <li><a className="white-text" href="#!">Alianzas</a></li>
	               <li><a className="white-text" href="#!">Ubicación</a></li>
	               <li><a className="white-text" href="#!">Powered by IBM</a></li>
	             </ul>
	           </div>
	         </div>
	       </div>
	       <div className="footer-copyright">
	         <div className="container">
	         Desarrollado por <a className="orange-text text-lighten-3" href="http://materializecss.com">ENTERRISK</a>
	         </div>
	       </div>
	     </footer>

  	</div>
)

export default Index;
