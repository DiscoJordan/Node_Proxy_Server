import fetchMeteors from "../repositories/meteors.repository.js";

export default async function getFormattedMeteors(
  dates,
  count,
  wereDangerousMeteors
) {
  const meteors = await fetchMeteors(dates[0], dates[1]);
  let queryResponse = {};
  let formattedMeteors = Object.keys(meteors).flatMap((date) =>
    meteors[date].map((meteor) => ({
      id: meteor.id,
      name: meteor.name,
      diameter_meters: meteor.estimated_diameter.meters.estimated_diameter_max,
      is_potentially_hazardous_asteroid:
        meteor.is_potentially_hazardous_asteroid,
      close_approach_date_full:
        meteor.close_approach_data[0]?.close_approach_date_full,
      relative_velocity_kps:
        meteor.close_approach_data[0]?.relative_velocity?.kilometers_per_second,
    }))
  );

  if (count === "true") {
    queryResponse.count = formattedMeteors.length;
  }
  if (wereDangerousMeteors === "true") {
    queryResponse.wereDangerousMeteors = formattedMeteors.some(
      (meteor) => meteor.is_potentially_hazardous_asteroid
    );
  }


  return count === "true" || wereDangerousMeteors === "true"
    ? queryResponse
    : formattedMeteors;
}
