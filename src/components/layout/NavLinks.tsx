import React from 'react';

const links = [
  { href: "#about", label: "About" },
  { href: "#speakers", label: "Speakers" },
  { href: "#schedule", label: "Schedule" },
  { href: "#venue", label: "Venue" },
  { href: "#contact", label: "Contact" },
];

export const NavLinks: React.FC = () => {
  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-white hover:text-blue-400 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </>
  );
};