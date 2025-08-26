function Button({ label, backgroundColor, onClick }) {
  
  return <button onClick={onClick} style={{ padding: "10px 20px", margin: "5px", cursor: "pointer", backgroundColor, borderRadius: "5px", border: "none", color: "white" }}>{label}</button>;
}

export default Button;

