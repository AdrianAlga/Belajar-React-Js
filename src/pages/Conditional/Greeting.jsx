function Greeting({ isLoggedIn }) {
  return (
    <h2>{isLoggedIn ? "Selamat datang 👋" : "Silakan login 🔑"}</h2>
  )
}


export default Greeting;
