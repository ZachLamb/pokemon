import Card from "../components/card";

import "../styles/index.scss";

const projects = [
  {
    photo: "/bsaur.png",
    text: "first project"
  },
  {
    photo: "/bsaur.png",
    text: "second project"
  },
  {
    photo: "/bsaur.png",
    text: "third project"
  },
  {
    photo: "/bsaur.png",
    text: "first project"
  },
  {
    photo: "/bsaur.png",
    text: "second project"
  }
];

const Index = () => (
  <div className="main-page flex">
    <div className="flex-row flex-main-space ">
      {projects.map(project => {
        return <Card photo={project.photo} name={project.text} />;
      })}
    </div>
  </div>
);

export default Index;
