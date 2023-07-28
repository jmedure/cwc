import { Inter } from 'next/font/google';
// import { useTheme } from 'next-themes';
// import { useEffect } from 'react';
import ThemeChanger from '../components/ThemeChanger';

const inter = Inter({ subsets: ['latin'] });

// const themes = [
//   { name: 'Light' },
//   { name: 'Dark' },
//   { name: 'Monakai' },
//   { name: 'Pink' },
// ];

export default function Home() {
  // const [mounted, setMounted] = useState(false);
  // const { resolvedTheme, setTheme } = useTheme();

  // // When mounted on client, now we can show the UI
  // useEffect(() => setMounted(true), []);

  // if (!mounted) return null;

  return (
    <div className="antialiased font-sans h-full w-full bg-th-background text-th-primary-dark">
      <ThemeChanger />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="z-10 w-full max-w-xl items-center justify-between font-mono font-thin text-sm lg:flex">
          <div className="flex-col space-y-16">
            {/* <button
            onClick={() => {
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
            }}
            selectedTheme={resolvedTheme}
            className="p-4 bg-black dark:bg-white rounded-full"
          ></button> */}
            <p className="uppercase">Create with Care</p>
            <div className="space-y-8">
              <p className="indent-8">
                From nothing a new thing exists, imbued with the essence of the
                maker.
              </p>
              <p>Good in = good out. Bad in = bad out.</p>
              <p>
                For instance, a maker optimizing for money is likely to end up
                with a product that: uses poor material, does not pay people
                along the supply chain adequately, is made by a machine, and
                promotes very little response from the end user.
              </p>
              <p>
                A screenwriter optimizing for the truth within themselves could
                make the movie-goer cry tears of joy.
              </p>
              <p>
                It is much harder to find the truth within oneself than it is to
                set up a drop shipping store.
              </p>
              <p>--</p>
              <p>We are all both makers and consumers.</p>
              <p>
                Our environment consists of a surplus of things to consume made
                both with and without care. It is hard for the end-user to make
                good decisions about what to consume.
              </p>
              <p>
                It is much easier to tell when something you’ve made doesn’t
                meet the mark. Thus, the impetus is on makers to create with
                care every single time.
              </p>
              <p>
                If all makers create with care every time there is only care to
                consume.
              </p>
              <p>--</p>
              <p>
                This is a moral pursuit. To make in this way is a noble act. In
                order to fill a world with care we create with care.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
