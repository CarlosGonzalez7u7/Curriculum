/**
 * Helper function to get the correct image URL
 * In development: /image.jpg
 * In production (GitHub Pages): /Curriculum/image.jpg
 */
export function getImageUrl(imageName: string): string {
  const basePath = import.meta.env.BASE_URL;
  return `${basePath}${imageName}`;
}
