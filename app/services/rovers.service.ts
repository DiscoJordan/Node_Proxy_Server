import fetchImages from "../repositories/rovers.repository.js";
import { roverImage } from "../types/rover.types.js";

export default async function getRecentImage() {
  const images: roverImage[] = await fetchImages();
  const recentImage = images.sort(
    (a: roverImage, b: roverImage) =>
      new Date(b.earth_date).getTime() - new Date(a.earth_date).getTime(),
  );
  return recentImage[0];
}
