import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import NotificationList from "./components/NotificationList";

const App = () => {
  return (
    <ThemeProvider>
      <h1>TaskFlow</h1>
      <ThemeSwitcher />
      <NotificationList />
    </ThemeProvider>
  );
};

export default App;
