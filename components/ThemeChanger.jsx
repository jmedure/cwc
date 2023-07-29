import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const themes = [
  'light',
  'dark',
  'orange',
  'red',
  'blue',
  'green',
  'purple',
  'brown',
];

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="p-4 sm:p-3 rounded-full bg-white/05 backdrop-invert brightness-150"
      id="change"
      value={theme}
      onClick={(e) => {
        const index = themes.indexOf(theme);
        const next = themes[(index + 1) % themes.length];
        setTheme(next);
        console.log(next);
      }}
    ></button>
  );
};

export default ThemeChanger;
