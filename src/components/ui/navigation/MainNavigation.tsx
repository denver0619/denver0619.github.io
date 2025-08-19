import { useEffect, useState } from "react";

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

  // const handleClick = (href: string) => {
  //   // Update current
  //   setNavItems((prev) =>
  //     prev.map((nav) => ({ ...nav, current: nav.href === href }))
  //   );

  //   // Smooth scroll
  //   const target = document.querySelector(href);
  //   if (target) {
  //     target.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // scroll spy setup
  useEffect(() => {
    // target inner anchors/headings instead of entire <section>
    const targets = document.querySelectorAll("section[id] > div");

    const observer = new IntersectionObserver(
      (entries) => {
        let closest: { id: string; offset: number } | null = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            const id = (entry.target.parentElement as HTMLElement).id; // section id
            const offset = Math.abs(rect.top);

            if (!closest || offset < closest.offset) {
              closest = { id, offset };
            }
          }
        });

        if (closest) {
          const id = `#${(closest as { id: string; offset: number }).id}`;
          setNavItems((prev) =>
            prev.map((nav) => ({ ...nav, current: nav.href === id }))
          );
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px", // trigger when heading is ~40% down screen
        threshold: 0,
      }
    );

    targets.forEach((t) => observer.observe(t));

    return () => {
      targets.forEach((t) => observer.unobserve(t));
    };
  }, []);

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
