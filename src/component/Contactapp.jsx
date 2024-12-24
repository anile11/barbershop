import React from 'react';
import Contactcard from './Contactcard'
import Contactlist from './Contactlist'
import {useState} from 'react'


const Contactapp=()=>
{


    let[state,setState]=useState(
        {
            parentdata:{}

        }
    )

    let{parentdata}=state
    let receive=(data)=>
    {
        setState((state)=>({
            parentdata:data
        }));
    };

    
    return(
        <React.Fragment>
           
           
            
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Contactlist  send={receive} />
                    </div>
                    </div>
                   
                   <div className='row'>
                    <div className="col-12">
                        <Contactcard  sendc2={parentdata}/>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}
export default Contactapp