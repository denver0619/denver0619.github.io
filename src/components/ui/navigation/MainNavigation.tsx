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
  return (
    <>
      <div className="navigation-wrapper">
        <div className="navigation-container">
          <nav>
            {navigation.map((item: NavigationContent) => (
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
