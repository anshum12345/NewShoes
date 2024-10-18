import React, { useEffect, useState } from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  const [Year, setYear] = useState();

  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);

  return (
    <>
      <style>
        {`
          .bg-theme {
            background-color: #1a1a1a; /* Example theme color */
          }

          .nike-container {
            max-width: 1200px; /* Adjust as necessary */
            margin: 0 auto;
            padding: 0 1rem; /* Side padding */
          }

          .text-slate-200 {
            color: #e2e8f0; /* Example text color */
          }

          .grid {
            display: grid;
          }

          .items-start {
            align-items: flex-start;
          }

          .grid-cols-3 {
            grid-template-columns: repeat(3, 1fr);
          }

          .max-w-2xl {
            max-width: 42rem; /* Adjust as necessary */
          }

          .w-full {
            width: 100%;
          }

          .m-auto {
            margin: auto;
          }

          .md\:max-w-none {
            max-width: none;
          }

          .md\:gap-5 {
            gap: 1.25rem; /* Adjust gap for medium screens */
          }

          .text-lg {
            font-size: 1.125rem; /* Large text size */
          }

          .lg\:text-base {
            font-size: 1rem; /* Base text size for larger screens */
          }

          .md\:text-sm {
            font-size: 0.875rem; /* Small text size for medium screens */
          }

          .uppercase {
            text-transform: uppercase;
          }

          .font-semibold {
            font-weight: 600;
          }

          .gap-1 {
            gap: 0.25rem; /* Adjust gap between list items */
          }

          .text-sm {
            font-size: 0.875rem; /* Small text size */
          }

          .sm\:text-xs {
            font-size: 0.75rem; /* Extra small text size for small screens */
          }

          .mt-5 {
            margin-top: 1.25rem; /* Margin top */
          }

          .text-center {
            text-align: center;
          }

          .md\:text-center {
            text-align: center; /* Center text for medium screens */
          }
        `}
      </style>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container text-slate-200">
          <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
            {titles.map((val, i) => (
              <div key={i} className="grid items-center">
                <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                  {val.title}
                </h1>
              </div>
            ))}
            {links.map((list, i) => (
              <ul key={i} className="grid items-center gap-1">
                {list.map((link, i) => (
                  <li key={i} className="text-sm sm:text-xs">
                    {link.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              <span className="font-semibold">
                👟 made by Anshum {Year} 👟
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
