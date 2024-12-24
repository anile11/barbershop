// import React from 'react';
// import { useState } from 'react';
// import axios from 'axios';

// import './RegisterForm.css';
// function RegisterForm(){

//     let[state,setState]=useState({
//         user:{
//             username:'',
//             email:'',
//             password:''
            
//         }
//     });

//     let{user}=state
//     let changeinput=(event)=>{
//         setState((state)=>({
//             user:{
//                 ...user,
//                 [event.target.name]:event.target.value
//             }
//         }));
//      }
//     let submitdata=(e)=>{
//         e.preventDefault();
//         axios.post('https://anilelchuri11-default-rtdb.firebaseio.com/r.json',user)
//         .then(()=>{
//             alert("successfully submited")
//         }).catch((error)=>{
//             console.log(error)
//         })

//     }


//     return(
//         <React.Fragment>
//               <pre>{JSON.stringify(user)}</pre> 
//             <h2>Registration  Form </h2>
//             <div className="container">
                
//                 <form onSubmit={submitdata}>
                   
//                     <div className="username">
//                         <input type="text"name="username" placeholder="userame" 
                        
//                         value={user.username}

//                         onChange={changeinput} required></input>
//                     </div>

//                     <div className="email">
//                         <input type="email"name="email"placeholder="email" 
//                         value={user.email}
//                         onChange={changeinput}
                        
//                         required></input>
//                     </div>

//                     <div className="password">
//                         <input type="password"name="password"placeholder="password" min='4'max='8'
//                         value={user.password}
//                         onChange={changeinput}
//                         ></input>
                    // </div>
                    {/* <input type="submit" className='btn' value='button' ></input> */}
            //         <button className='btn'>submit</button>
            //     </form>
            // </div>


            {/* <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header"><h1>form </h1></div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <input className="form-control" type="text" placeholder="username">
                                        </input>
                                    </div>

                                    <div className="mb-3">
                                        <input className="form-control" type="email" placeholder="email">
                                        </input>
                                    </div>

                                    <div className="mb-3">
                                        <input className="form-control" type="password" placeholder="password">
                                        </input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         */}
//             </React.Fragment>
//     );
// }
// export default RegisterForm;