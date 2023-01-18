import http from "./httpService";

const defaultApi = "https://api.steviapro.com/api";
const coursesApi = `${defaultApi}/get-all-courses-paginated`;
const courseFilterApi = `${defaultApi}/course/filter-course-search`;
const allCourseApi = `${defaultApi}/course/course-search-new`;

const getACourseApi = `/get-course-by-id`;

export const getCourses = (pageNumber = 1) => {
  return http.get(`${coursesApi}?page_number=${pageNumber}`);
};
export const getAllCourses = (queryString: string) => {
  return http.get(`${allCourseApi}?${queryString}`);
};
export const getACourse = (id: any) => {
  return http.get(`${getACourseApi}/${id}`);
};
export const courseFilter = (data: any) => {
  return http.post(courseFilterApi, data);
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getCourses,
  getACourse,
  getAllCourses,
};

