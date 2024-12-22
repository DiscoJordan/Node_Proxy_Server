export const validateDate = (
  queryDate: string | [string, string],
): [string, string] => {
  let dateArr: [string, string] = ["2024-11-17", "2024-11-18"];

  if (Array.isArray(queryDate)) {
    if (queryDate.length === 2) {
      dateArr = [queryDate[0], queryDate[1]];
    }
  } else if (typeof queryDate === "string") {
    dateArr = ["2024-11-17", queryDate];
  }
  return dateArr;
};
