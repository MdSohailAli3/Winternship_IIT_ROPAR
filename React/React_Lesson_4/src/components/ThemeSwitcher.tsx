import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "dark" : "light"}
        </button>
    );
};

export default ThemeSwitcher;
