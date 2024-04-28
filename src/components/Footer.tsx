import { FaGithub } from "react-icons/fa";
function Footer() {
  function getYear(): number {
    return new Date().getFullYear();
  }

  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p>
          Copyright © {getYear()} Tech Vault - All right reserved by ACME Industries
          Ltd
        </p>
        <FaGithub
          href="https://github.com/moabukar/tech-vault"
          className="w-6 h-6"
        />
      </aside>
    </footer>
  );
}

export default Footer;
