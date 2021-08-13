const PresidentChild = ({ president, showDates }) => {

  return (
    <div>
      <div id="name-tag">
        <p>
          {president.first} {president.last}
        </p>
      </div>
      {showDates ? (
        <div id="death">
          <p>
            Died at age {president.passed - president.year}
          </p>
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default PresidentChild;
