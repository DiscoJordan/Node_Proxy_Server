export const validateDate = (queryDateArr) => {
  let dateArr = ["2024-11-17", "2024-11-18"];
  
  dateArr[0] = queryDateArr?.length === 2 ? queryDateArr[0] : "2024-11-17";

  dateArr[1] =
    queryDateArr?.length === 2
      ? queryDateArr[1]
      : queryDateArr?.length === 1
      ? queryDateArr
      : "2024-11-18";

  return dateArr;
};
