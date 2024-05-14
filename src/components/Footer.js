import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>My Personal Website</strong> by{" "}
            <a href="https://juangonzalez.dev/">Juan Gonzalez</a> | All Rights
            Reserved Copyright&copy;
            {new Date().getFullYear()}&nbsp;
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
