import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../component/Header/Header";
import { getProject, baseURL } from "../../configs/services";
import "./Project.css";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    getProject(id, setProject);
  }, []);
  return (
    <>
      <Header />
      <div>
        {project && project.files && (
          <div style={{ marginBottom: 30 }}>
            <div>
              <img className="img-view" src={project.files[0].path} />
              <img className="img-view1" src={project.files[1].path} />
            </div>
            <div className="desc-view">
              <h2>{project.description}</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Project;
