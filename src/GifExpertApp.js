import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

const GifExpertApp = () => { 
    const [categories, setCategories] = useState(['One Punch']);

   //const handleAdd = () => {
        // los puntos son los espacios del arreglo osea es . = one punch, . = Samurai, . = Dragon
       //setcategories( ...categories, 'Kuroko No Basket' ); 

       // cats es el valor del estado anterior y luego mas el nuevo elemento en el estado anterior
       //setcategories ( cats => [...cats, 'Kuroko No Basket']); 

    //};

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCat = { setCategories }></AddCategory>
            <hr></hr>

            <ol>
                {
                    // Mao es como un loop
                    categories.map( category => (
                        //return <li key={ category }> { category } </li>
                        <GifGrid 
                            key= { category }
                            category = { category } >
                                
                        </GifGrid>
                    ))
                }

            </ol>
            
        </>
    );
}

export default GifExpertApp;

