
// import React,{useState,useEffect} from 'react';
//  const adata="https://jsonplaceholder.typicode.com/posts"

// let Apidata=()=>{
//  let[state,setState]=useState([])


//     let Handler=async ()=>{
//         const response=await fetch (adata)
//         const newdata=await response.json()
//         setState(newdata)
//     }
   
    
//     useEffect(()=>{
//         Handler()
//     },[])
//     return(
//         <React.Fragment>
//             {
//                 state.map((item)=>{
//                     return(
                       
//                         <React.Fragment>
//                         <h1>{item.id}</h1>
//                         <p>{item.title}</p>
                        
//                         </React.Fragment>
                       
                       
//                     )
//                 })
//             }
//         </React.Fragment>
//     )
// }
// export default Apidata;