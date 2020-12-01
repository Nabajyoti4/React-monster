import React from 'react';

import './card.styles.css'

export const Card = props => {
     return  <div className="col-sm-4 col-lg-3 p-3 d-flex">
         <div className="card-container w-100">
             <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
         <h2>{props.monster.name}</h2>
<p>{props.monster.email}</p>
         </div>
     </div>
}