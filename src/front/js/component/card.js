import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";


export const Card = (props) => {	
	const { store, actions } = useContext(Context);

	return (
		<div>
		 <div className="card m-auto" style={{width:300, height: 400}}>
		 		<img src={props.img} class="card-img-top" style={{width:300, height: 320}} />
		   <div className="button d-flex justify-content-center text-center mt-3">
			 <button className="btn btn-dark">{props.title}</button>
		   </div>
		 	</div>
		 </div>
	 );
   }
   
//    Card.PropTypes = {
//     img: PropTypes.string,
// 	title: PropTypes.string,
//    };


export default Card;