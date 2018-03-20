import React from 'react';

const Card = (props) => {
  const {name, email, id} = props; // mozem vytvorit clenske constanty const {name, email, id} = props   a potom nemusim volat premennu props.id ale len id
  return (
    //kod musi byt v divku alebo v nejakom elemente pretoze return vzdy dokaze vratit len jeden parent element
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;