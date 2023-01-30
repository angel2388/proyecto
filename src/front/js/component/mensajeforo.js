import React from "react";
import "../../styles/foro.css";
import { Link } from "react-router-dom";


export const Foroindividual = () => {
  return (
    <div>
          <div className="col-12 m-auto mt-5 card border-light">
            <p className="m-2">Título del post</p>
            </div>
            <div className="d-flex mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart me-2" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>            
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-circle-2" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" /><line x1="12" y1="12" x2="12" y2="12.01" /><line x1="8" y1="12" x2="8" y2="12.01" /><line x1="16" y1="12" x2="16" y2="12.01" />
              </svg>
            </div>
    </div>
  )
}