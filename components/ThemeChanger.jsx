import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Head from 'next/head';

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
    <>
      <Head>
        <title>CREATE WITH CARE</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Create with Care" key="title" />
        <link rel="icon" href={`/favicon-${theme}-32.png`} />
      </Head>
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
    </>
  );
};

export default ThemeChanger;
