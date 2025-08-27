import React from "react"
import Navbar from "./components/Navbar"
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react"
import Educator from "./pages/Educator"
import Student from "./pages/Student"

export default function App() {
  const { user } = useUser()

  return (
    <div>
      <Navbar />
      <main className="p-6">
        <SignedOut>
          <p className="text-center mt-20 text-lg">
            Welcome to <span className="font-semibold">AI Education</span>.  
            Please sign in to continue.
          </p>
        </SignedOut>

        <SignedIn>
          {user?.publicMetadata?.role === "educator" ? (
            <Educator />
          ) : (
            <Student />
          )}
        </SignedIn>
      </main>
    </div>
  )
}
