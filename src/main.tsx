import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import App from "./App.tsx";

const theme = createTheme({
	primaryColor: "blue",
	fontFamily: "Inter, sans-serif",
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<MantineProvider theme={theme}>
			<App />
		</MantineProvider>
	</StrictMode>
);
