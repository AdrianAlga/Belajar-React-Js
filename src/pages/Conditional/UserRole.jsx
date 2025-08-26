function UserRole({ role }) {
  switch (role) {
    case "admin":
      return <h2>Halo Admin 👑</h2>
    case "user":
      return <h2>Halo User 👤</h2>
    default:
      return <h2>Halo Guest 🙋</h2>
  }
}

export default UserRole;