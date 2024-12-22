import fetchMeteors from "../repositories/meteors.repository.js";
import { IFormattedMeteor } from "../types/meteors.types.js";

interface IQueryResponse {
  count?: number;
  wereDangerousMeteors?: boolean;
}

export default async function getFormattedMeteors(
  [startDate, endDate]: string[],
  count: string | undefined,
  wereDangerousMeteors: string | undefined,
) {
  const meteors = await fetchMeteors(startDate, endDate);
  const queryResponse: IQueryResponse = {};
  const formattedMeteors: IFormattedMeteor[] = Object.keys(meteors).flatMap(
    (date) =>
      meteors[date].map((meteor) => ({
        id: meteor.id,
        name: meteor.name,
        diameter_meters:
          meteor.estimated_diameter.meters.estimated_diameter_max,
        is_potentially_hazardous_asteroid:
          meteor.is_potentially_hazardous_asteroid,
        close_approach_date_full:
          meteor.close_approach_data[0]?.close_approach_date_full,
        relative_velocity_kps:
          meteor.close_approach_data[0]?.relative_velocity
            ?.kilometers_per_second,
      })),
  );

  if (count === "true") {
    queryResponse.count = formattedMeteors.length;
  }
  if (wereDangerousMeteors === "true") {
    queryResponse.wereDangerousMeteors = formattedMeteors.some(
      (meteor) => meteor.is_potentially_hazardous_asteroid,
    );
  }

  return count === "true" || wereDangerousMeteors === "true"
    ? queryResponse
    : formattedMeteors;
}
