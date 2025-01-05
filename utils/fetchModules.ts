export async function fetchModules() {
  // Replace with your actual data fetching logic
  const response = await fetch("https://api.example.com/modules");
  const data = await response.json();
  return data; // Ensure this returns an array of modules
}

export async function fetchModuleBySlug(slug: string) {
  // Replace with your actual data fetching logic
  const response = await fetch(`https://api.example.com/modules/${slug}`);
  if (!response.ok) {
    return null; // Return null if the module is not found
  }
  const data = await response.json();
  return data; // Ensure this returns a single module object
}
