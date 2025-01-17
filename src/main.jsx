import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// код  в тегах нижче буде відображатись в div з id root на сторінці
createRoot(document.getElementById("root")).render(
  <>
    {/* виклик компонента App */}
    <App />
  </>
);
