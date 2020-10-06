import React, { useContext, useEffect, useState } from 'react';
import { Media } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Tasks = () => {
    const { loggedInUser } = useContext(UserContext);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch(`https://pacific-falls-20244.herokuapp.com/tasks?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(result => {
                setTasks(result);
            })
    }, []);

    const deleteTasks = (id) => {
        const singleTask = document.getElementById(id);

        fetch(`https://pacific-falls-20244.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    singleTask.style.display = 'none';
                }
            })
    }



    return (
        <>
            <Header></Header>
            <div className="tasks mt-5">
                <div className="container">
                    <div className="row">
                        {
                            tasks.map(task => <div className="col-md-6" key={task._id}>
                                <Media id={task._id} className="mb-3">
                                    <img
                                        width={150}
                                        height={150}
                                        className="mr-3"
                                        src="holder.js/64x64"
                                        alt=""
                                    />
                                    <Media.Body>
                                        <h3>{task.org}</h3>
                                        <h5>{task.date}</h5>
                                        <button
                                            className="btn btn-primary mt-3"
                                            onClick={() => deleteTasks(task._id)}
                                        >Cancel</button>
                                    </Media.Body>
                                </Media>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tasks;