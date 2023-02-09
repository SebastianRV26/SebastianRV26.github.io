import React, { useState } from "react";
import ProjectDialog from "./ProjectDialog";

const Porfolio = (props) => {
  let resumeData = props.resumeData;
  const [modalShow, setModalShow] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {resumeData.portfolio &&
              resumeData.portfolio.map((item, idx) => {
                return (
                  <div
                    key={`project-${idx}`}
                    className="columns portfolio-item"
                  >
                    <div
                      className="item-wrap"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setModalShow(true);
                        setCurrentProject(item);
                      }}
                    >
                      {/* <a href="#modal-01"> */}
                      <img
                        alt={item.name}
                        src={item.imgurl}
                        className="item-img"
                      />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                      {/* </a> */}
                    </div>
                  </div>
                );
              })}
            {modalShow && (
              <ProjectDialog
                open={modalShow}
                handleClose={() => setModalShow(false)}
                maxWidth="md"
                item={currentProject}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Porfolio;
