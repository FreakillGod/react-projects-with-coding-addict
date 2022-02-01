
import React, { useState } from 'react';

const List = ({persons}) => {

const deletePerson=(id)=>{
    console.log(id)
}

  return (
    <>
      {persons.map((person)=>{
        const{id,name,age,image}=person;
        return <article key={id} className='person'>
          <img src={image} alt={name}/>
          <div>
            <h4>{name}</h4>
            <p>{age}</p>
            <button onClick={()=>deletePerson(id)}>Done</button>
          </div>
        </article>
      })}
    </>
  );
};

export default List;
