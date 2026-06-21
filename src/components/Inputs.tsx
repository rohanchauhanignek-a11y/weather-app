const Inputs = ({ setflag, flag }: { setflag: React.Dispatch<React.SetStateAction<boolean>>; flag: boolean }) => {
  return (
    <div className="bg-body flex items-center justify-between gap-4 p-2 border-none">
      <div className="flex justify-start gap-4">
        <button
        onClick={() => setflag(!flag)}
        className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 shrink-0"
        aria-label="Toggle sidebar"
      >
        <span
          className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
            flag ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
            flag ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
            flag ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>
      </div>
      <div></div>

     <form className="w-1/2 rounded-lg  bg-[hsl(223,36%,35%)] border-none">
          <label
            htmlFor="search"
            className="block mb-2.5 text-sm font-medium text-heading sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-3 ps-9 bg-neutral-secondary-medium   text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-white"
              placeholder="Search"
              required
            />
            <button
              type="button"
              className="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
            >
              Search
            </button>
          </div>
        </form>
        <label className="inline-flex items-center cursor-pointer text-white font-bold text-lg py-4">
            <span className="select-none text-sm font-medium text-heading">Dark </span>
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative mx-3 w-9 h-5 bg-body peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            <span className="select-none text-sm font-medium text-heading">Light</span>
          </label>

    </div>
  );
};

export default Inputs;