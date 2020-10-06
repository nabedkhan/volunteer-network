import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logo.png';
import './VolunteerForm.css';

const VolunteerForm = () => {
    const { id } = useParams();
    const history = useHistory();
    const { loggedInUser } = useContext(UserContext);
    const [selectOrg, setSelectedOrg] = useState({});
    const [registerInfo, setRegisterInfo] = useState({
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        date: '',
        description: ''
    });

    const handleBlur = (event) => {
        const newInfo = { ...registerInfo };
        newInfo[event.target.name] = event.target.value;
        setRegisterInfo(newInfo);
    }

    useEffect(() => {
        fetch(`https://pacific-falls-20244.herokuapp.com/singleOrg/${id}`)
            .then(response => response.json())
            .then(result => {
                setSelectedOrg(result);
                const updateRegisterInfo = { ...registerInfo };
                updateRegisterInfo.org = result.name;
                setRegisterInfo(updateRegisterInfo);
            })
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        fetch('https://pacific-falls-20244.herokuapp.com/event', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerInfo)
        })
            .then(() => {
                history.push('/tasks');
            })
    }

    // console.log(selectOrg);
    // console.log(registerInfo);

    return (
        <div className="Volunteer-form">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <div className="logo text-center my-3">
                            <Link to="/"><img src={logo} className="img-fluid" alt="" /></Link>
                        </div>
                        <div className="form-area">
                            <form onSubmit={handleFormSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    onBlur={handleBlur}
                                    defaultValue={loggedInUser.displayName}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    onBlur={handleBlur}
                                    defaultValue={loggedInUser.email}
                                    required
                                />
                                <input
                                    type="date"
                                    name="date"
                                    onBlur={handleBlur}
                                    placeholder="Date"
                                    required
                                />
                                <input
                                    type="text"
                                    name="description"
                                    onBlur={handleBlur}
                                    placeholder="Description"
                                    required
                                />
                                <input
                                    type="text"
                                    name="org"
                                    onBlur={handleBlur}
                                    defaultValue={selectOrg.name}
                                    required
                                />
                                <input type="submit" value="Registration" />
                                {/* <button type="submit">Registration</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerForm;