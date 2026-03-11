export default function ViewSlider({ viewsArray, view, setView }) {
  return (
    <div className="toggle">
      {viewsArray.map((item) => (
        <Button item={item} key={item} view={view} setView={setView} />
      ))}
    </div>
  );
}

function Button({ item, view, setView }) {
  return (
    <button
      onClick={() => setView(item)}
      className={`toggle__button ${item === view ? "active" : ""}`}
    >
      {item}
    </button>
  );
}
