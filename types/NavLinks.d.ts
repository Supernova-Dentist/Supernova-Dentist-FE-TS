type Sublink = {
  name: string;
  link: string;
};

type NavLink = {
  name: string;
  url: string;
  subLinks: SubLink[];
};

type NavLinks = NavLink[];
