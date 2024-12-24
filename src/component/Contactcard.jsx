import React from 'react';
import './Contactcard.css';

const Contactcard = (props) => {
    return (
        <React.Fragment>
            {Object.keys(props.sendc2).length > 0 && (
                <div className="contact-card">
                    <div className="card shadow-ly sticky-top">
                        {/* Card header with image */}
                        <div className="card-header">
                            <img
                                src={props.sendc2.image}
                                alt="image"
                                className="card-image"
                            />
                        </div>

                        {/* Card body with contact details */}
                        <div className="card-body">
                            <ul className="list-group" style={{ textTransform: 'uppercase' }}>
                                {/* <li className="list-group-item">
                                    <pre>ID: {props.sendc2.id}</pre>
                                </li> */}
                                <li className="list-group-item">
                                    <pre>NAME: {props.sendc2.name}</pre>
                                </li>
                                <li className="list-group-item">
                                    <pre>AGE: {props.sendc2.age}</pre>
                                </li>
                                <li className="list-group-item">
                                    <pre>EXPerience: {props.sendc2.dob} years</pre>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default Contactcard;
