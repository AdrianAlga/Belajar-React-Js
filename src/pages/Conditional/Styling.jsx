function Status({ isActive }) {
  return (
    <p className={isActive ? "text-green-500" : "text-gray-500"}>
      {isActive ? "Aktif ✅" : "Nonaktif ❌"}
    </p>
  )
}

export default Status;