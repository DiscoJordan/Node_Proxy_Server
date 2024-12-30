export const parseMeteorIntervalDates = (
  queryDate?: unknown,
): [string, string] => {
  const defaultStartDatgIfQueryIsNotFilled = "2024-11-17";
  const defaultEndDateIfQueryIsNotFilled = "2024-11-18";

  let dateArr: [string, string] = [
    defaultStartDatgIfQueryIsNotFilled,
    defaultEndDateIfQueryIsNotFilled,
  ];

  if (Array.isArray(queryDate)) {
    if (queryDate.length === 2) {
      dateArr = [queryDate[0], queryDate[1]];
    }
  } else if (typeof queryDate === "string") {
    dateArr = [defaultStartDatgIfQueryIsNotFilled, queryDate];
  }
  return dateArr;
};
