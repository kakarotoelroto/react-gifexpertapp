import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( { setCat } ) => {
    
    const [inputVale, setInputVale] = useState('');
    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputVale( e.target.value );
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
       // console.log('Submit hecho');

       if( inputVale.trim().length > 2 )
       {
        setCat( cats => [inputVale, ...cats] );
        setInputVale( '' );
       }
       
        
    };

    return (
        
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                value={ inputVale }
                onChange={ handleInputChange }
            >
            </input>   
        </form>
        
        
    );

    AddCategory.prototype = {
        setCat: PropTypes.func.isRequired
    }

    
}
