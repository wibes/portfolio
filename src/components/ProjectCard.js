export const ProjectCard = (props) => {
  const { projectName, projectDescription, icon, key } = props;
  return (
    <div
      key={key}
      class="w-96 h-[100] bg-slate-500 m-10 flex justify-center p-2 rounded-sm border-1 shadow-sm"
    >
      <div class="flex-col flex items-center">
        <img class="w-40 h-40 rounded-full mt-0" src={icon} alt="profile" />
        <h2 class="text-white text-xl mt-4 font-bold">{projectName}</h2>
        <h2 class="text-white mt-5 text-lg">{projectDescription}</h2>
      </div>
    </div>
  );
};
