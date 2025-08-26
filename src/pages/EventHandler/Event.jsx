function Event() {
  const items = ["Apel", "Mangga", "Jeruk"];

  function handleClick(item) {
    alert("Kamu memilih: " + item);
  }

  return (
    <>
      {items.map((item, index) => (
        <button key={index} onClick={() => handleClick(item)}>
          {item}
        </button>
      ))}
    </>
  );
}

export default Event;
