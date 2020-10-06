import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Organization from '../Organization/Organization';
import Search from '../Search/Search';
import './Home.css';

const Home = () => {

    const [organizationList, setOrganizationList] = useState([]);

    useEffect(() => {
        fetch('https://pacific-falls-20244.herokuapp.com/organizations')
            .then(response => response.json())
            .then(result => setOrganizationList(result))
    }, []);

    return (
        <>
            <div className="top-part">
                <Header />
                <Search />
            </div>

            <div className="organization">
                <div className="container">
                    <div className="row">
                        {
                            organizationList.map((org, index) =>
                                <Organization
                                    key={org._id}
                                    org={org}
                                    index={index}
                                />)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;