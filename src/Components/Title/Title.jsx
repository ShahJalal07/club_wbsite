import React from 'react';

const Title = ({main,sub }) => {
    return (
        <div className='title'>
           <h1>{main}</h1> 
           <p>{sub}</p>
        </div>
    );
};

export default Title;