import React from 'react';

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        href="https://www.linkedin.com/in/dan-akhirebhulu/"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img
          src="../assets/linkedin.png"
          alt="linkedin"
        />
      </a>
      <a
        href="https://github.com/pi-xlz"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        Github
      </a>
      <a
        href="https://drive.google.com/file/d/1emS9I7qOKa_a1qREUbgdwqUKuz5HzNP3/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        Resume
      </a>
    </div>
  );
};

export default SocialMediaIcons;
