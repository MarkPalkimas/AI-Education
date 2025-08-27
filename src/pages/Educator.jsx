import React from "react"

export default function Educator() {
  const classCode = "ABC123" // later generate dynamically
  return (
    <div className="mt-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">Educator Dashboard</h2>
      <p>Your class code is:</p>
      <p className="text-3xl font-bold text-indigo-600 mt-2">{classCode}</p>
    </div>
  )
}
