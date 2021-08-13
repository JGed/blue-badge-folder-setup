import { presidentsArray } from "./presidents.constant";
import PresidentChild from "./PresidentChild";

const PresidentParent = () => {
  return (
    <div>
      <div id="bronze">
        <h3>Bronze Challenge</h3>
        {presidentsArray.map((president) => (
          <PresidentChild president={president} />
        ))}
      </div>
      <div id="silver">
        <h3>Silver Challenge</h3>
        {presidentsArray
          .filter((president) => president.passed === undefined)
          .map((president) => (
            <PresidentChild president={president} />
          ))}
      </div>
      <div id="gold">
        <h3>Gold Challenge</h3>
        {presidentsArray
          .filter((president) => president.passed !== undefined)
          .map((president) => (
            <PresidentChild president={president} showDates />
          ))}
      </div>
    </div>
  );
};

export default PresidentParent;
