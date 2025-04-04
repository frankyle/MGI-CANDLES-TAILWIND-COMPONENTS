export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-8 sm:px-6 sm:py-12 lg:px-8"> {/* Reduced py-24 to py-8 and sm:py-32 to sm:py-12 */}
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-4 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-8 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"> {/* Adjusted pt-16 to pt-4 */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-12 lg:text-left"> {/* Reduced lg:py-16 to lg:py-12 */}
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            Master Forex Trading with Smart & Proven Strategies
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300">
            Gain an edge in the forex market with expert insights, technical analysis, 
            and a logical approach to profitable trading.
        </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-12 h-80 lg:mt-0"> {/* Reduced mt-16 to mt-12 and removed margin-top for lg:mt-4 */}
            <img
              alt="App screenshot"
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
