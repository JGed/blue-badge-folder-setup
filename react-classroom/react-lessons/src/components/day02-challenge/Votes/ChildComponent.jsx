const ChildComponent = ({ votes }) => {
    return (
        <div>
            <p>
                {votes.name} had a total of {votes.count} votes.
            </p>
        </div>
    );
};

export default ChildComponent;
