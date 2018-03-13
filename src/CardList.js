// import React from 'react';
// import Card from './Card';
//
//
// const CardList = ({robots}) => {
//   const cardComponent = robots.map((user, i) => {
//     //ak davam do html javascript musim pouzit {}
//     //react vyzaduje aby mal alement key property ktora bude unique aby vedel pracovat s jednotlivymi elementami samostatne
//     return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
//   });
//
//   return(
//     <div>
//       {cardComponent}
//       </div>
//   )
// }
// export default CardList;

import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {

  return(
    <div>
      {
        robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
      })
      }
    </div>
  )
}

export default CardList;