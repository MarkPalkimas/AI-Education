// src/components/Navbar.jsx
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-2xl font-bold">AI Education</h1>
      <div>
        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
