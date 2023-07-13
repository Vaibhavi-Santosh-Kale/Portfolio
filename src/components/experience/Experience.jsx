import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill} from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h3>Skills</h3>
      <h2>What Skills I Have</h2>
      {/* <h2>My Experence</h2> */}

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="ext-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="ext-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="ext-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="ext-light">Beginners</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="ext-light">Beginners</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React Js</h4>
                <small className="ext-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Frontend */}
        {/* Backend Started */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Node jS</h4>
              <small className="ext-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>MYSQL</h4>
              <small className="ext-light"> Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>MondoDB</h4>
              <small className="ext-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Express Js</h4>
              <small className="ext-light">Beginners</small>
            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Strapi</h4>
              <small className="ext-light"> Beginners</small>
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
