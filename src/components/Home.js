import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h3>Sho me all the phones you have</h3>
            <h5> I Got : {phones.length}</h5>
            {
                phones.map(ph => <li><Link to={`/phones/${ph.id}`}>{ph.name}</Link></li>)
            }
        </div>
    );
};

export default Home;