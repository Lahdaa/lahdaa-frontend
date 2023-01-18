import http from "./httpService";

const defaultApi = "https://api.steviapro.com/api";
const getAllInstructorsApi = `${defaultApi}/instructor/get-all-instructors?page_number=1`;
const getAnInstructorsApi = `${defaultApi}/instructor/get-instructor-info`;
const applyAsInstructorApi = `${defaultApi}/instructor/process-instructor-application`;
const allInstructorsApi = `${defaultApi}/instructor/instructor-search-new`;

export const getAllInstructors = () => {
  return http.get(getAllInstructorsApi);
};

export const getInstructors = (queryString: string) => {
  return http.get(`${allInstructorsApi}?${queryString}`);
};

export const getAnInstructor = (id: any) => {
  return http.get(`${getAnInstructorsApi}/${id}`);
};

export const applyAsInstructor = (data: any) => {
  return http.post(applyAsInstructorApi, data);
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getAllInstructors,
  getAnInstructor,
  applyAsInstructor,
  getInstructors,
};

