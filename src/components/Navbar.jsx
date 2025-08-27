import React from "react"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white shadow px-6 py-4">
      <h1 className="text-2xl font-bold text-indigo-600">AI Education</h1>
      <div>
        <SignedOut>
          <SignInButton>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}
