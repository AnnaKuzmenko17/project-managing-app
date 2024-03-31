import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
  return (
    <aside className="w-1/3 py-16 px-8 bg-stone-900 text-stone-50 rounded-r-xl md:w-72">
      <h2 className="my-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>
          + Add Project
        </Button>
      </div>
      <ul className="mt-8" >
        {projects.map(project => {
          let classes = "w-full text-left px-2 py-1 rounded-sm my-1";

          if(project.id === selectedProjectId) {
            classes += "bg-stone-800 text-stone-200"
          } else {
            classes += "text-stone-400"
          }

          return (<li key={project.id}>
          <button
            className={classes}
            onClick={() => onSelectProject(project.id)}
          >
            {project.title}
          </button>
        </li>
        )})}
      </ul>
    </aside>
  );
}