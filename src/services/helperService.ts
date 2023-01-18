import http from "./httpService";

const defaultApi = "https://api.steviapro.com/api";
const coursesCategoryApi = `${defaultApi}/helper/get-all-course-categories`;
const getLevelOfCompetenceApi = `${defaultApi}/helper/get-all-level-of-competences`;
const getDurationsApi = `${defaultApi}/helper/get-all-durations`;
const getAllCountriesApi = `${defaultApi}/helper/get-all-countries`;

export const getCoursesCategory = () => {
  return http.get(coursesCategoryApi);
};
export const getLevelOfCompetence = () => {
  return http.get(getLevelOfCompetenceApi);
};
export const getDurations = () => {
  return http.get(getDurationsApi);
};
export function getAllCountries() {
  return http.get(getAllCountriesApi);
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getCoursesCategory,
  getLevelOfCompetence,
  getDurations,
  getAllCountries,
};


