import React from "react";
import Layout from "../../components/Layout";
import "./Project.scss";
import Modal from "../../components/modal";
import useProjects from "./useProjects";

const Projects = () => {
  const { openModal, modalContent, handleOpenModal, projects } = useProjects();

  return (
    <Layout>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h2>{project.title}</h2>
            <div className="project-period">{project.period}</div>
            <ul>
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            <div className="project-actions">
              {project?.modal && (
                <button
                  onClick={() => handleOpenModal(project.modal)}
                  className="btn"
                >
                  자세히 보기
                </button>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                사이트 보기
              </a>
            </div>
          </div>
        ))}
      </div>
      <Modal open={openModal} onClose={() => handleOpenModal()}>
        {modalContent}
      </Modal>
    </Layout>
  );
};

export default Projects;
