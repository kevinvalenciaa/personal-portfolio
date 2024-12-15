export function searchProjects(projects: any[], query: string) {
  if (!query.trim()) return projects;
  
  const lowercaseQuery = query.toLowerCase();
  return projects.filter(project => 
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.technologies.some((tech: string) => tech.toLowerCase().includes(lowercaseQuery))
  );
}

export function filterProjectsByCategory(projects: any[], category: string) {
  if (category === "All") return projects;
  return projects.filter(project => project.category === category);
}
