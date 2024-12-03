export function generateSitemap() {
  const routes = ["/", "/about", "/projects", "/contact"];
  const baseUrl = "https://kevinvalencia.dev";
  
  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
