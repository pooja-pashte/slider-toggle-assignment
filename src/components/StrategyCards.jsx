import { strategyArray } from "../data/data";

function countStrategies(datesData) {
  const count = {};

  datesData.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  return count;
}

export default function StrategyCards({ date, view }) {
  const viewData = strategyArray.filter((item) => item.View === view);
  const datesData = viewData?.[0]?.Value?.[date] || [];
  const count = countStrategies(datesData);

  return (
    <>
      {datesData.length > 0 ? (
        <ul className="cards">
          {Object.keys(count).map((item) => (
            <Card item={item} count={count} />
          ))}
        </ul>
      ) : (
        <NoStrategies date={date} />
      )}
    </>
  );
}

function Card({ item, count }) {
  return (
    <li className="cards_item">
      <p>{item}</p>
      <p className="count">
        <span>{count[item]}</span>
        <span>{count[item] === 1 ? "Strategy" : "Strategies"}</span>
      </p>
    </li>
  );
}

function NoStrategies({ date }) {
  return (
    <div className="nostrategy">
      <p>There are no strategies for</p>
      <p>
        <strong>{date.replace(/-/g, " ")}</strong>
      </p>
    </div>
  );
}
