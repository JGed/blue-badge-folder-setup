import ChildComponent from "./ChildComponent";

const ParentComponent = ({ phrase }) => {
  const votes = [
    { name: "Abe Lincoln", count: 139033 },
    { name: "Stephen Douglass", count: 115509 },
  ];

  return (
    <div>
      <h3>Vote Results</h3>
      {votes.map((vote) => (
        <ChildComponent votes={vote} />
      ))}
    </div>
  );
};

export default ParentComponent;
