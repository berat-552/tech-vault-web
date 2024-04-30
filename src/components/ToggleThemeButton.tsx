import { useEffect, useState } from "react";
import { themes } from "../constants/themes";

function ToggleThemeButton() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "default");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <div className="dropdown mx-2 z-10">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] shadow-2xl bg-base-300 rounded-box overflow-y-auto max-h-36"
      >
        {themes.map((item) => (
          <li key={item}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={item.charAt(0).toUpperCase() + item.slice(1)}
              value={item}
              checked={theme === item}
              onChange={() => handleChange(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToggleThemeButton;
