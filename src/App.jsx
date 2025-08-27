import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import Educator from "./pages/Educator";
import Student from "./pages/Student";

export default function App() {
  const { user } = useUser();

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <main className="p-6">
        <SignedOut>
          <Hero />
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
  );
}
