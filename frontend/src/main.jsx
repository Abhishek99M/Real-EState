import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css"
import "@mantine/dates/styles.css"

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-sp1xo52ukodfwewj.us.auth0.com"
    clientId="DXdRIxwIYA9wYGJyVFqSXRo4CQ0dCrZu"
    authorizationParams={{
      redirect_uri: "https://real-e-state-frontend.vercel.app",
    }}
    audience="http://localhost:3000"
    scope="openid profile email"
  >
    <MantineProvider>
        <App />
    </MantineProvider>
  </Auth0Provider>
);
