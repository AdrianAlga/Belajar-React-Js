function handleChange(e) {
  console.log(e.target.value);
}

function EventObject1() {
  return <input type="text" onChange={handleChange} />;
}
export default EventObject1;