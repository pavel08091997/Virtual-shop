import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  const linkGit = "https://github.com/pavel08091997/Virtual-shop";
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">clothing store</h5>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © {date}
          <a
            className="grey-text text-lighten-4 right"
            href="#!"
            onClick={() => {
              window.open(linkGit);
            }}
          >
            Open Git Hab
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
