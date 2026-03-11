export default function DateDropdown({ dateArray, date, setDate }) {
  return (
    <select
      className="dropdown"
      value={date}
      onChange={(e) => setDate(e.target.value)}
    >
      {dateArray.map((dateItem) => (
        <option value={dateItem}>{dateItem.replace(/-/g, " ")}</option>
      ))}
    </select>
  );
}
