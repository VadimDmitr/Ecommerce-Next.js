import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="fixed flex items-center justify-center space-x-4 left-0 bottom-0 pt-5 p-0 w-full bg-black text-white">
      <h1 className="text-xl">&copy; Vadim Dmitrochenko</h1>

      <a href="https://github.com/VadimDmitr" target="_blank" rel="noreferrer">
        <FaGithubSquare className="text-2xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/vadim-dmitrochenko-14a88b221/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="text-2xl" />
      </a>
    </footer>
  );
}
export default Footer;
