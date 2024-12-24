import React, { useState } from 'react';
import Esource from './Esource';
import './Contactlist.css';  // Add your custom styles

let Contactlist = (props) => {
    let [state, setState] = useState({
        c: Esource.getlist(),
    });

    let { c } = state;

    let Select = (item) => {
        props.send(item);
    };

    return (
        <React.Fragment>
            <h2 className="contact-list-heading">EXPERTS</h2>
            <div className="table-responsive">
                <table className="table table-hover text-center table-striped">
                    <thead className="table-light">
                        <tr>
                            <th>S.NO</th>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>EXPERIENCE</th>
                            <th>MOBILE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {c.length > 0 &&
                            c.map((item) => (
                                <tr
                                    key={item.id}
                                    onClick={() => Select(item)}
                                    className="table-row"
                                    style={{ cursor: 'pointer' }}
                                >
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.dob} <small>yrs</small></td>
                                    <td>{item.mobile}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

export default Contactlist;
