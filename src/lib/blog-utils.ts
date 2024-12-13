export const blogCategories = ["Web Development", "JavaScript", "React", "Next.js", "TypeScript", "Career", "Tutorials"];

export function getCategoryColor(category: string): string {
  const colors = {
    "Web Development": "bg-blue-100 text-blue-800",
    "JavaScript": "bg-yellow-100 text-yellow-800", 
    "React": "bg-cyan-100 text-cyan-800",
    "Next.js": "bg-gray-100 text-gray-800",
    "TypeScript": "bg-blue-100 text-blue-800",
    "Career": "bg-green-100 text-green-800",
    "Tutorials": "bg-purple-100 text-purple-800"
  };
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
}
