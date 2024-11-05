import React from "react";

export const metadata = {
  title: "Media | Dole's Music",
  description: "We are creative music collective based in Mumbai, India.",
};

const Layout = ({ children }) => {
  return (
    <main className="flex flex-row justify-between h-full w-full">
      {children}
    </main>
  );
};

export default Layout;
