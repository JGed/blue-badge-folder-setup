import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "reactstrap";
import WorkoutCreate from "./WorkoutCreate";
import WorkoutTable from "./WorkoutTable";
import WorkoutEdit from "./WorkoutEdit";

const WorkoutIndex = (props) => {

    const [workouts, setWorkouts] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [workoutToUpdate, setWorkoutToUpdate] = useState({});

    const fetchWorkouts = useCallback(() => {
        fetch('http://localhost:3000/log', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(res => res.json())
        .then(logData => setWorkouts(logData))
        .catch(err => console.log(err));
    }, [props.token]);

    const editUpdateWorkout = workout => {
        setWorkoutToUpdate(curr => workout);
        console.log(workout);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchWorkouts();
    }, [fetchWorkouts]);

    return (
        <Container>
            <Row>
                <Col md="3">
                    <WorkoutCreate fetchWorkouts={fetchWorkouts} token={props.token}/>
                </Col>
                <Col md="9">
                    <WorkoutTable workouts={workouts} fetchWorkouts={fetchWorkouts} editUpdateWorkout={editUpdateWorkout} updateOn={updateOn} token={props.token} />
                </Col>
                {updateActive ? <WorkoutEdit workoutToUpdate={workoutToUpdate} updateOff={updateOff} token={props.token} fetchWorkouts={fetchWorkouts} /> : <></>}
            </Row>
        </Container>
    );
}

export default WorkoutIndex;