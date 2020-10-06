import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './Search.css';

const Search = () => {
    return (
        <div className="search-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="search-bar text-center">
                            <h1>I grow by helping people in need.</h1>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;