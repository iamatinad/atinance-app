import { BarChart, LockKeyhole, LogIn, RectangleEllipsis } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";




export const navItems = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Contact us", href: "#contact" },

];



export const features = [
  {
    icon: <LockKeyhole/>,
    text: "Secure your Finances",
    description:
      "Easily create a unique username and password for secure access to your financial data.",
  },
  {
    icon: <Fingerprint />,
    text: "Track Every Penny",
    description:
      "Seamlessly add income and expenses, categorizing them for easy budgeting and analysis",
  },
  {
    icon: <ShieldHalf />,
    text: "Budget BluePrint",
    description:
      "Set a daily budget and receive timely notifications when you're nearing or exceeding your limit.",
  },
  {
    icon: <RectangleEllipsis />,
    text: "Return Champion",
    description:
      "Enjoy a familiar experience with Atinance's seamless login for returning users.",
  },
  {
    icon: <LogIn />,
    text: "Security",
    description:
      "Securely log out of your account whenever needed for optimal data protection..",
  },
  {
    icon: <BarChart />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within the application with an integrated analytics dashboard.",
  },
];

