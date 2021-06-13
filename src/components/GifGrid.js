import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //    getGifs( category )
    //     .then( imgs => setImages( imgs ) );
    // }, [ category ])

    //const state = useFetchGifs();
    const { data: imgs, loading } = useFetchGifs( category );

   
    return (
        <>
           <h3 className= "animate__animated animate__bounce"> { category } </h3>
           { loading && <p className="animate__animated animate__flash"> Loading</p> }

           <div className='card-grid'>                       
                {
                    // images.map( img => (
                    //     <li key={ img.id }>{ img.title }</li>
                    // ))
                    //o tammbien
                    imgs.map( img =>(
                        <GifGridItem 
                            
                            key = { img.id }
                            { ...img }
                        >

                        </GifGridItem>
                    ))
                }
           
            </div> 
            
        </>
    )       
        
}
