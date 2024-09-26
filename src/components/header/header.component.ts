import "./header.component.scss";

interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps) {
  const header = document.createElement("header");
  const nav = document.createElement("nav");

  header.className = "Header";
  nav.className = "Header__nav";

  return header;
}

export default Header;
