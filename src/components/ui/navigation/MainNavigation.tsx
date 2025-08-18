import { useState } from "react";

interface NavigationContent {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationContent[] = [
  { name: "Home", href: "#home", current: true },
  { name: "Skills", href: "#skills", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "About Me", href: "#about-me", current: false },
  { name: "Contacts", href: "#contacts", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const MainNavigation = () => {
  const [navItems, setNavItems] = useState<NavigationContent[]>(navigation);

  const handleClick = (href: string) => {
    // Update current
    setNavItems((prev) =>
      prev.map((nav) => ({ ...nav, current: nav.href === href }))
    );

    // Smooth scroll
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="navigation-wrapper">
        <div className="navigation-container">
          <nav>
            {navItems.map((item: NavigationContent) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "navigation-item-active"
                    : "navigation-item-inactive",
                  "navigation-item"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            {/* <img
              alt="Profile picture"
              src={profile_pic}
              className="navigation-profile"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavigation;
