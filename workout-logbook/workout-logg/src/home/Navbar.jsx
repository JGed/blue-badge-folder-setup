import { useState } from 'react';
import {
    Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button
} from 'reactstrap';

const Sitebar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(curr => !curr);
    }
    return (
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Workout Log</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Sitebar;