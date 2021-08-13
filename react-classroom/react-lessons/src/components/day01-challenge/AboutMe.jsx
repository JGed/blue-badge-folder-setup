const AboutMe = () => {

    const listStyle = { listStyle: "none" };
    const headerStyle = { color: "red" };

    return (
        <>
            <h1 style={headerStyle}>Josh</h1>
            <p>I grew up in Indianapolis</p>
            <ul style={listStyle}>
                <li>Germany</li>
                <li>Mexico</li>
                <li>Canada</li>
            </ul>
        </>
    );
}

        /*
        
        <>
            <h1 className="name-tag" style={ { color: red }}>Josh</h1>
            <p>I grew up in Indianapolis</p>
            <ul style={ { listStyle: none } }>
                <li style={ { listSyle: none } }>Germany</li>
                <li style={ { listStyle: none } }>Mexico</li>
                <li style={ { listSTyle: none } }>Canada</li>
            </ul>
        </>
                
        <>
            <h1 className="name-tag">Josh</h1>
            <p>I grew up in Indianapolis</p>
            <ul>
                <li>Germany</li>
                <li>Mexico</li>
                <li>Canada</li>
            </ul>
        </>
            
        */
export default AboutMe;