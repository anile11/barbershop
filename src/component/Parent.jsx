import React from 'react';
import {useState} from 'react';
// import {useReceiver} from 'react';


import Child from './Child';
import Children from'./Children';

let Parent=()=>{

    let[state,setState]=useState({
        village:'',
        author:''
    });
    let receive=(data,v)=>{

        
        setState({
            village:v,
            author:data

        });

        

        
    }
    

    return (
        <React.Fragment>
            
           
            <h1>parent name  {state.author}</h1>
            <p>hello {state.author} from {state.village} </p>
            <Child abc={receive}/>
            <Children x={state}/>

        </React.Fragment>

    );
}
export default Parent;