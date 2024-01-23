const Footer = () => {
  return (
    <div className="max-w-auto mx-auto p-4">
      <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-nft-white hover:text-bright-cyan"
        >
          Frontend Mentor
        </a>{" "}
        Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/recyclecodes"
          target="_blank"
          className="text-nft-white hover:text-bright-cyan"
        >
          Anthony
        </a>
      </span>
    </div>
  );
};

export default Footer;
