import React from 'react'

const About = () => {
    return (
        <>
            {/* <div className="container">
    <h1 style={{textAlign:'center',marginTop:'20px', color:'rgba(10,250,205,215)',fontFamily:'fantasy'}}>WE OFFER BEST SERVICES AT OFFORDABLE PRICES </h1>
    <div className="service" style={{marginTop:"20px",color:'red'}}>
        <h2>➡SHAVING</h2>
    </div>
    <div className="service">
        <h2>➡HAIRCUT</h2>
    </div>
    <div className="service">
        <h2>➡BEARD</h2>
    </div>
    <div className="service">
        <h2>➡KIDS HAIRCUTS</h2>
    </div>
    <div className="service">
        <h2>➡FACIALS</h2>
    </div>
</div> */}

<h1 className='text-warning' style={{fontSize:'21px', margin:'5%'}}>WE PROVIDE BEST SERVICES AT <br/></h1><pre className='text-secondary'style={{textAlign:'center',fontSize:'24px'}}>OFFERADABLE PRICES</pre>
<div className="container" style={{display:'flex',marginTop:'30%'}}>


<table className="table table-dark table-striped" style={{marginTop:'10px',}} >
    <thead>
        <tr className='table-danger'>
            <td>SERVICE</td>
            <td>PRICES</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>FORMAL HAIRCUT</td>
            <td>null</td>
        </tr>
        <tr>
            <td>SPECIAL HAIRCUT</td>
            <td>null</td>
        </tr>
        <tr>
            <td>SHAVING</td>
            <td>null</td>
        </tr>
        <tr>
            <td>BEARD</td>
            <td>null</td>
        </tr>
        <tr>
            <td>KIDS HAIRCUT</td>
            <td>null</td>
        </tr>
        <tr>
            <td>FACIALS</td>
            <td>null</td>
        </tr>
    </tbody>
</table>
</div>


        </>
    )
}
export default About;
