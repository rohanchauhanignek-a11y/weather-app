import { setWeatherData, setCity } from "../redux/weatherSlice";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWeatherByCity } from "../servicices/weatherService";
import { getCitySuggestions } from "../servicices/cities";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "../hooks/useDebounce";

const Inputs = ({
  setflag,
  flag,
}: {
  setflag: React.Dispatch<React.SetStateAction<boolean>>;
  flag: boolean;
}) => {
  const { register, handleSubmit, setValue } = useForm();
  const city = useSelector((store: any) => store.weather.city);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSugg, setShowSugg] = useState(false);

  const debouncedSearch = useDebounce(searchTerm, 500);

  const { data: weatherData } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => getWeatherByCity(city),
    enabled: !!city,
  });

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!debouncedSearch.trim()) {
        setSuggestions([]);
        return;
      }

      try {
        const data = await getCitySuggestions(debouncedSearch);
        setSuggestions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSuggestions();
  }, [debouncedSearch]);

  useEffect(() => {
    if (weatherData) {
      dispatch(setWeatherData(weatherData));
    }
  }, [weatherData, dispatch]);

  function onSubmit(data: any) {
    dispatch(setCity(data?.city));
    setShowSugg(false);
  }

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

      <form
        className="w-1/2 rounded-lg bg-[hsl(223,36%,35%)] border-none relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          htmlFor="search"
          className="block mb-2.5 text-sm font-medium text-heading sr-only"
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
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            type="search"
            id="search"
            className="block w-full p-3 ps-9 bg-neutral-secondary-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-white"
            placeholder="Search"
            {...register("city")}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setValue("city", e.target.value);
              setShowSugg(true);
            }}
            onFocus={() => setShowSugg(true)}
            onBlur={() => setTimeout(() => setShowSugg(false), 150)}
          />

          <button
            type="submit"
            className="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
          >
            Search
          </button>
        </div>

        {showSugg && suggestions.length > 0 && (
          <ul className="absolute top-full left-0 right-0 mt-1 bg-[hsl(223,36%,28%)] rounded-lg overflow-hidden z-50 border border-white/10 shadow-lg">
            {suggestions.map((city, index) => (
              <li
                key={index}
                onMouseDown={() => {
                  const cityName =
                    city.name || city.city || city.local_names?.en || city;

                  setValue("city", cityName);
                  dispatch(setCity(cityName));
                  setShowSugg(false);
                }}
                className="flex items-center gap-3 px-4 py-2.5 text-white text-sm cursor-pointer hover:bg-white/10 transition-colors"
              >
                <span className="opacity-50">📍</span>
                {city.name || city.city || city}
                {city.country ? `, ${city.country}` : ""}
              </li>
            ))}
          </ul>
        )}
      </form>

      <label className="inline-flex items-center cursor-pointer text-white font-bold text-lg py-4">
        <span className="select-none text-sm font-medium text-heading">
          Dark
        </span>

        <input type="checkbox" value="" className="sr-only peer" />

        <div className="relative mx-3 w-9 h-5 bg-body peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>

        <span className="select-none text-sm font-medium text-heading">
          Light
        </span>
      </label>
    </div>
  );
};

export default Inputs;