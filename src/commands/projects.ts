const projectMap = new Map<string, [string, string]>();

projectMap.set("Zample", [
  "https://100xa.github.io/2021/01/01/project-zample/",
  "Flutter App for centrally distributing Ideas",
]);
projectMap.set("Pomodoro Tracker", [
  "https://100xa.github.io/2023/03/22/project-pomodoro-tracker/",
  "CLI AppleScript Pomodoro Tracker",
]);
const createProject = (): string[] => {
  const projects: string[] = [];
  const SPACE = " ";

  projects.push("<br>");

  projectMap.forEach((value, projectName) => {
    const [link, description] = value;
    const linkElement = `<a href="${link}" target="_blank">${projectName}</a>`;
    const padding = SPACE.repeat(30 - projectName.length); // Increased spacing here
    const projectString = `${SPACE.repeat(
      2
    )}${linkElement} -${padding}${description}`;
    projects.push(projectString);

    projects.push("<br>");
  });

  projects.push("<br>");
  projects.push(`${projectMap.size} File(s)`);
  projects.push("<br>");
  return projects;
};

export const PROJECTS = createProject();
