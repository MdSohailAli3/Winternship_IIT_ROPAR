import { usePreferencesStore } from '../store/preferencesStore';

export default function PreferencesPanel() {
  const { theme, fontSize, setTheme, setFontSize } =
    usePreferencesStore();

  return (
    <div>
      <h3>Preferences</h3>

      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Theme: {theme}
      </button>

      <br />

      <button onClick={() => setFontSize(fontSize + 1)}>
        Font Size: {fontSize}
      </button>
    </div>
  );
}
