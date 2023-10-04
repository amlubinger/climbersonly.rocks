import App from './App';
import "@aws-amplify/ui-react/styles.css";
import {
    defaultDarkModeOverride,
    ThemeProvider,
} from "@aws-amplify/ui-react";
import { useState } from "react";

export default function AppContainer() {
    function getInitialTheme() {
        return (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? "dark" : "light";
    }
    const [colorMode, setColorMode] = useState(getInitialTheme());

    const theme = {
        name: 'my-theme',
        overrides: [defaultDarkModeOverride],
    };

    function setDarkTheme() {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
    };
    
    function setLightTheme() {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    };
    
    function onThemeSwitcherItemClick(theme) {
        setColorMode(theme);
        if (theme === "system") {
            localStorage.removeItem("theme");
            setSystemTheme();
        } else if (theme === "dark") {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    };

    return (
        <ThemeProvider theme={theme} colorMode={colorMode}>
            <App onThemeSwitcherItemClick={onThemeSwitcherItemClick} colorMode={colorMode}/>
        </ThemeProvider>
    );
}
