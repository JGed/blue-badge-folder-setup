import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Signup = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(username, password);

        fetch("http://localhost:3000/user/register", {
            method: 'POST',
            body: JSON.stringify({ user: { username: username, password: password } }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json()) 
        .then(data => props.updateToken(data.sessionToken))
        .catch(err => console.log(err));
    }

    return(
        <div>
            <h1>Sign up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input name="username" value={username} onChange={ e => setUsername(e.target.value) }/>
                </FormGroup>
                <br />
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input name="username" value={password} onChange={ e => setPassword(e.target.value) }/>
                </FormGroup>
                <br />
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    );
};

export default Signup;