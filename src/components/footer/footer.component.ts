import { bem } from "@utils";

const Footer = () => {
  const cn = bem("Footer");

  const footer = document.createElement("div");

  footer.className = cn("item", "red");

  return footer;
};

export default Footer;
