import React from "react";

export const Footer = () => {
  return (
    <footer
      bgColor="light"
      style={{ position: "absolute", top: "100vh", width: "100%" }}
      className="text-center text-lg-left"
    >
      <div style={{ backgroundColor: "beige" }}>
        <h5 className="text-uppercase">Footer text</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque
          ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae
          repudiandae aliquam voluptatem veniam, est atque cumque eum delectus
          sint!
        </p>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="https://iitbhu.ac.in">
          MACS IIT BHU
        </a>
      </div>
    </footer>
  );
};
