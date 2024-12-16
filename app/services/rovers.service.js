import fetchImages from "../repositories/rovers.repository.js";

export default async function getRecentImage() {
  const images = await fetchImages();
  const recentImage = images.sort(
    (a, b) => new Date(b.earth_date) - new Date(a.earth_date)
  );
  return recentImage[0];
}
