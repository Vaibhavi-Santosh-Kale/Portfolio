import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

// use own images

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto-Dashboard",
    github: "https://github.com/Vaibhavi-Santosh-Kale/crypto-dashboard",
    demo: "https://crypto-dashboard-4e93b.web.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "i-Coder Web",
    github: "https://github.com/Vaibhavi-Santosh-Kale/Wbsite",
  },
  {
    id: 3,
    image: IMG3,
    title: "Book-My-Show",
    github: "https://github.com/Vaibhavi-Santosh-Kale/Book-My-Show",
    demo: "https://book-my-show-vaibhavi.web.app/",
  },
  // {
  //   id:4,
  //   image:IMG4,
  //   title:"deside later",
  //   github:"https://github.com",
  //   demo:"/"
  // },  {
  //   id:5,
  //   image:IMG5,
  //   title:"deside later",
  //   github:"https://github.com",
  //   demo:"/"
  // },  {
  //   id:6,
  //   image:IMG6,
  //   title:"deside later",
  //   github:"https://github.com",
  //   demo:"/"
  // }
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h3>MY Projects</h3>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__items">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}

        {/* <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a href="/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article> */}

        {/* <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a href="/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article> */}

        {/* <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a href="/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article> */}

        {/* <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a href="/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article> */}

        {/* <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a href="/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default portfolio;
