function Alert({ show }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {show && <p style={{ color: "red" }}>Ada pesan penting!</p>}
    </div>
  );
}

export default Alert;