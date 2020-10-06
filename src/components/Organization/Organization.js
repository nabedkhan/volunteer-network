import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Organization.css';

const Organization = ({ org, index }) => {
    const { name, img, _id } = org;
    return (
        <div className="col-lg-3 col-md-6 org">
            <Link to={`/volunteer/${_id}`}>
                <Card className="mb-3">
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="b-body" id={'No' + index}>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default Organization;