"use client";
import { useEffect } from "react";
import { useColorStore } from "@/providers/colorStoreProvider";
import { calculateContrast } from "@/utils/calculateContrast";

export const ShowPaletteSection = () => {
  const colors = useColorStore((state) => state.colors);
  const [primary, secondary, neutral, details, accent] = colors;

  useEffect(() => {
    if (colors.length > 0) {
      document.documentElement.style.setProperty("--color-primary", primary || "");
      document.documentElement.style.setProperty("--color-secondary", secondary || "");
      document.documentElement.style.setProperty("--color-neutral", neutral || "");
      document.documentElement.style.setProperty("--color-details", details || "");
      document.documentElement.style.setProperty("--color-accent", accent || "");
    }
  }, [colors, primary, secondary, neutral, details, accent]);

  return (
    <section className="w-full mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="flex flex-col space-y-4">
        <div
          role="alert"
          className="alert"
          style={{
            backgroundColor: "var(--color-accent)",
            color: calculateContrast(accent || "#000000"),
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>New software update available.</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {[
            { color: primary, label: "Primary" },
            { color: secondary, label: "Secondary" },
            { color: neutral, label: "Neutral" },
            { color: details, label: "Details" },
            { color: accent, label: "Accent" },
          ].map(({ color, label }) => (
            <div
              key={label}
              className="badge"
              style={{
                backgroundColor: color,
                color: calculateContrast(color || "#000000"),
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <fieldset
          className="fieldset p-4 bg-base-100 border border-base-300 rounded-box h-fit"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <legend className="fieldset-legend">Login options</legend>
          <label className="fieldset-label" style={{ color: calculateContrast(details || "#000000") }}>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox"
              style={{ backgroundColor: "var(--color-secondary)" }}
            />
            Remember me
          </label>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Pick a file</legend>
          <input
            type="file"
            className="file-input"
            style={{
              backgroundColor: "var(--color-primary)",
              color: calculateContrast(details || "#000000"),
            }}
          />
          <label className="fieldset-label">Max size 2MB</label>
        </fieldset>
      </div>

      <div className="col-span-1 lg:col-span-2">
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="text-black">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              <tr
                className="bg-base-200"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: calculateContrast(details || "#000000"),
                }}
              >
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <div
          className="radial-progress"
          style={{
            "--value": 70,
            color: "var(--color-primary)",
          } as React.CSSProperties}
          aria-valuenow={70}
          role="progressbar"
        >
          70%
        </div>

        <select
          defaultValue="Color scheme"
          className="select"
          style={{
            backgroundColor: "var(--color-secondary)",
            color: calculateContrast(secondary || "#000000"),
          }}
        >
          <option disabled={true}>Color scheme</option>
          <option>Light mode</option>
          <option>Dark mode</option>
          <option>System</option>
        </select>

        <div
          className="stats shadow h-fit"
          style={{
            backgroundColor: "var(--color-neutral)",
            color: calculateContrast(details || "#000000"),
          }}
        >
          <div className="stat">
            <div className="stat-title" style={{ color: calculateContrast(details || "#000000") }}>Total Page Views</div>
            <div className="stat-value" style={{ color: calculateContrast(details || "#000000") }}>89,400</div>
            <div className="stat-desc" style={{ color: calculateContrast(details || "#b8b8b8") }}>21% more than last month</div>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-md shadow-md flex flex-col space-y-4">
        <div>
          <h5 className="font-montserrat text-lg font-bold">Login</h5>
          <p className="text-sm text-slate-400">Login to your account</p>
        </div>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Username</legend>
          <input
            type="text"
            className="input"
            placeholder="radriann21"
            style={{ borderColor: "var(--color-secondary)" }}
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input
            type="password"
            className="input"
            placeholder="your password..."
            style={{ borderColor: "var(--color-secondary)" }}
          />
        </fieldset>

        <button
          className="btn"
          style={{
            backgroundColor: "var(--color-primary)",
            color: calculateContrast(details || "#000000"),
          }}
        >
          Login
        </button>

        <button className="btn bg-black text-white border-black">
          <svg
            aria-label="GitHub logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            ></path>
          </svg>
          Login with GitHub
        </button>
      </div>

      <div className="mockup-code h-fit" style={{ backgroundColor: "var(--color-primary)" }}>
        <pre data-prefix="1"><code>npm i daisyui</code></pre>
        <pre data-prefix="2"><code>installing...</code></pre>
        <pre data-prefix="3" className="bg-warning text-warning-content" style={{ backgroundColor: "var(--color-neutral)", color: calculateContrast(details || "#000000") }}><code>Error!</code></pre>
      </div>
    </section>
  );
};