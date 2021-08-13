const StudentInformation = (props) => {
    const { studentName, grade, subject } = props;

    return (
        <div>
            <p>Student's Name: {studentName}</p>
            <p>Current Grade: {grade}</p>
            <p>Subject: {subject}</p>
        </div>
    )
}

export default StudentInformation;