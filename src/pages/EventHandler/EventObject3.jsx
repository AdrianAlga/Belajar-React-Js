function EventObject3() {
  function handleParentClick() {
    alert("Parent diklik");
  }

  function handleChildClick(e) {
    e.stopPropagation();
    alert("Child diklik");
  }

  return (
    <div onClick={handleParentClick} style={{ padding: 20, border: "1px solid black" }}>
      Parent
      <button onClick={handleChildClick}>Child</button>
    </div>
  );
}

export default EventObject3;
