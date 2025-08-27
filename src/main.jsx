import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { ClerkProvider } from "@clerk/clerk-react"

// 👇 Replace later with your actual Clerk key
const clerkPubKey = "pk_test_REPLACE_ME"
const clerkFrontendApi = "your-frontend-api.clerk.accounts.dev"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={clerkPubKey}
      frontendApi={clerkFrontendApi}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
)
