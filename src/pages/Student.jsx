
import React, { useState } from "react"

export default function Student() {
  const [code, setCode] = useState("")

  return (
    <div className="mt-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">Student Dashboard</h2>
      <p>Enter your class code below:</p>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter class code"
        className="mt-4 px-4 py-2 border rounded-lg w-64"
      />
      <button className="ml-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
        Join
      </button>
    </div>
  )
}
