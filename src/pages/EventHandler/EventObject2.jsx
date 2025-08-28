function EventObject2() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Form dicegah reload!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Kirim</button>
    </form>
  );
}

export default EventObject2;
