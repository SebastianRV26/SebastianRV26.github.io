import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item, idx) => {
                return (
                  <div key={`work-${idx}`} className="row item">
                    <div className="twelve columns">
                      <h3>{item.specialization}</h3>
                      <p className="info">
                        {item.CompanyName}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>
                        {item.Achievements.map(
                          (achievement, idx) => `${idx + 1}. ${achievement}\n`
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item, idx) => {
                return (
                  <div key={`education-${idx}`} className="row item">
                    <div className="twelve columns">
                      <h3>{item.specialization}</h3>
                      <p className="info">
                        {item.UniversityName}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>

            <div>
              {resumeData.skills &&
                resumeData.skills.map((item, idx) => {
                  return (
                    <li key={`skill-${idx}`}>
                      <em>{item.skillname}</em>
                      {/* <i className={item.className} /> */}
                    </li>
                  );
                })}
            </div>

            {/* <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item, idx) => {
                    return (
                      <li key={`skill-${idx}`}>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        />
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}
