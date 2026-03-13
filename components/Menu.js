import { useState } from "react";
import Image from "next/image";

export const Menu = () => {
  const [menuState, setMenuState] = useState("");
  return (
    <>
      <div className="display-grid js no-touch cssanimations csstransitions">
        <div className="nav-grid-logo">
          <header
            className="pad-top-500 pad-bottom-500 wrapper split-pair text-500 weight-light"
            data-variant="max-width"
          >
            <div>
              <a href="https://www.aafederation.org" target="_blank">
                <Image
                  src="/img/logo/AAF-Logo.svg"
                  alt="logo"
                  className="header-logo"
                  width={300}
                  height={42}
                />
              </a>
            </div>
            <nav
              aria-label="main menu"
              className="font-serif right-align nav-full-width"
            >
              <ul className="nav" role="list">
                <li className="display-none-important" id="go-back">
                  <span className="link-pointer">❮ Back to search results</span>
                </li>
                <li id="go-home">
                  <a href="/" className="link-pointer" data-variant="invert">
                    All Resources
                  </a>
                </li>
                <li>
                  <a
                    href="https://mhd.aafederation.org"
                    className="link-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mental Health Directory
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:programs@aafederation.org"
                    className="link-pointer"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <div className="nav-grid-button nav-hamburger">
          <div className="wrapper pad-top-500">
            <nav
              id="dl-menu"
              className="dl-menuwrapper font-serif right-align"
              role="navigation"
            >
              <button
                id="dl-menu-button"
                className="dl-trigger display-block right-align margin-top-005rem bg-secondary"
                onClick={() =>
                  setMenuState(menuState === "" ? "dl-menuopen" : "")
                }
              >
                Open Menu
              </button>
              <ul
                id="dl-menu-options"
                className={`dl-menu bg-secondary ${menuState}`}
              >
                <li className="display-none-important" id="go-back-hamburger">
                  <a>❮ Back To Search Results</a>
                </li>
                <li id="go-home-hamburger">
                  <a href="/">All Resources</a>
                </li>
                <li>
                  <a
                    href="https://mhd.aafederation.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mental Health Directory
                  </a>
                </li>
                <li>
                  <a href="mailto:programs@aafederation.org">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
