import { useState } from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

const CLERK_PUBLISHABLE_KEY = "YOUR_CLERK_PUBLISHABLE_KEY";

// Generate random class code (demo only)
function generateClassCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function Dashboard() {
  const { user } = useUser();
  const [role, setRole] = useState(null);
  const [classCode, setClassCode] = useState("");
  const [joinedCode, setJoinedCode] = useState("");

  if (!role) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Welcome {user?.firstName || "Friend"} 👋
        </h2>
        <p className="mb-6">Are you signing in as a student or educator?</p>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-lg m-2"
          onClick={() => {
            setRole("educator");
            setClassCode(generateClassCode());
          }}
        >
          I’m an Educator
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg m-2"
          onClick={() => setRole("student")}
        >
          I’m a Student
        </button>
      </div>
    );
  }

  if (role === "educator") {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold">Educator Dashboard</h2>
        <p className="mt-4">Your class code is:</p>
        <div className="text-3xl font-mono bg-gray-200 p-4 rounded-md mt-2 inline-block">
          {classCode}
        </div>
      </div>
    );
  }

  if (role === "student") {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold">Student Dashboard</h2>
        <p className="mt-4">Enter your class code:</p>
        <input
          type="text"
          className="border p-2 rounded-md mt-2"
          value={joinedCode}
          onChange={(e) => setJoinedCode(e.target.value.toUpperCase())}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() =>
            alert(joinedCode ? `Joined class with code: ${joinedCode}` : "Please enter a code")
          }
        >
          Join
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header */}
        <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md">
          <h1 className="text-xl font-bold">AI Education</h1>
          <div>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center">
          <SignedIn>
            <Dashboard />
          </SignedIn>
          <SignedOut>
            <p className="text-gray-700">Please sign in to continue.</p>
          </SignedOut>
        </main>
      </div>
    </ClerkProvider>
  );
}

export default App;
