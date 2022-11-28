import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";


export function Card(props) {	
	const { store, actions } = useContext(Context);

	return (
		<div>
		 <div className="card m-auto" style={{width:300, height: 400}}>
		 		<img src={props.img} class="card-img-top" style={{width:300, height: 350}} />
		 	<div className="card-body d-flex flex-column">
		   		<h5 className="card-title text-center">{props.title}</h5>
		   {/* <div className="button d-flex justify-content-center mt-auto">
			 <button className="btn btn-dark">{props.title}</button>
		   </div> */}
		 	</div>
		 </div>
	   </div>
	 );
   }
   
   Card.PropTypes = {
       img: PropTypes.string,
	 title: PropTypes.string,
   };


export default Card;