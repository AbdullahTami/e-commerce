import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const allLinks = [
  {
    id: 1,
    headline: "Account",
    links: {
      firstLink: "Create account",
      secondLink: "Sign in",
      thirdLink: "iOS app",
      forthLink: "Android",
    },
  },
  {
    id: 2,
    headline: "Company",
    links: {
      firstLink: "About Shopper",
      secondLink: "For Business",
      thirdLink: "Partners",
      forthLink: "Customers",
    },
  },
  {
    id: 3,
    headline: "Resources",
    links: {
      firstLink: "Help Center",
      secondLink: "Human Resources",
      thirdLink: "Privacy",
    },
  },
];

export const socialIcons = [
  {
    id: 1,
    icon: <FaFacebook />,
  },
  {
    id: 2,
    icon: <FaInstagram />,
  },
  {
    id: 3,
    icon: <FaTiktok />,
  },
  {
    id: 4,
    icon: <FaXTwitter />,
  },
];
