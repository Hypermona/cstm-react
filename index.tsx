import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/app";

const container = document.getElementById("root");
console.log("const", container);
const root = createRoot(container!);
root.render(<App />);
