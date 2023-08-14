import ThemeChanger from '../components/ThemeChanger';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between px-4 py-8 sm:p-24">
        <div className="z-10 max-w-[98%] sm:w-full sm:max-w-xl items-center justify-between font-mono font-thin text-sm lg:flex">
          <div className="flex-col space-y-16 w-full">
            <div className="flex justify-between w-full items-center">
              <p className="uppercase">Create w/ Care</p>
              <div>
                <ThemeChanger />
              </div>
            </div>
            <div className="space-y-8">
              <p className="indent-8">
                From nothing a new thing exists, imbued with the essence of the
                maker.
              </p>
              <p>Good in = good out. Bad in = bad out.</p>
              <p>
                For instance, a maker optimizing for money is likely to end up
                with a product that promotes very little response from the end
                user.
              </p>
              <p>
                A screenwriter optimizing for the truth within themselves could
                make the movie-goer cry.
              </p>
              <p>
                It is much harder to find the truth within oneself than it is to
                set up a drop-shipping store. It is much better to live in a
                world where we connect to the things we consume.
              </p>
              {/* <p>We are all both makers and consumers.</p> */}
              <p>
                Our environment consists of a surplus options made both, w/ and
                w/o care. It is hard for the end-user to make good decisions
                about what to consume. It is much easier to tell when something
                you’ve made doesn’t meet the mark.
              </p>
              <p>
                Thus, the impetus is on makers to create with care every single
                time.
              </p>
              <p>
                If all makers create with care every time there is only care to
                consume. To make in this way is a noble act.
              </p>
              <p className="pt-8">
                <i> In order to fill a world with care we create w/ care.</i>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
