/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */
import React from "react";
/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/img4.png";
const imageAltText = "desktop with books and laptop";
/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "DimiStudios Page 😺",
    description:
      "DIMISTUDIOS offers comprehensive IT services, including app development, web design, logo creation, and marketing planning.",
    url: "https://dimistudios.github.io/DIMI-STUDIOS/",
  },
  {
    title: "Yawar Ayllu Page 🎉",
    description:
      "Yawar Ayllu is a youth volunteer group dedicated to promoting Peruvian culture through various initiatives.",
    url: "https://dimistudios.github.io/YAWAR-AYLLU/",
  },
  {
    title: "Tic Tac Toe ✖️⭕",
    description:
      "Tic Tac Toe, also known as tic-tac-toe, has been developed in Python, a project that seeks to offer an interactive and entertaining experience.",
    url: "https://github.com/DimiStudios/TRES-EN-RAYA.git",
  },
  {
    title: "Vivero San Vicente Page 🌹",
    description:
      "Vivero San Vicente is a nursery located in Casma, Peru. I have developed a website that showcases our product catalog.",
    url: "https://dimistudios.github.io/VIVERO-SAN-VICENTE/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
