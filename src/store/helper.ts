import create from "zustand";
import * as services from "services";

interface HelperState {
  getCoursesCategory: () => void;
  getLevelOfCompetence: () => void;
  getCourseDurations: () => void;
  getCountries: () => void;
  coursesCategory: Array<{}>;
  courseCategoriesMapped: any;
  levelOfCompetence: Array<{}>;
  levelOfCompetenceMapped: any;
  durations: Array<{}>;
  durationsMapped: any;
  countries: Array<{}>;
  countriesMapped: any;
}

export const useHelper = create<HelperState>()((set) => ({
  coursesCategory: [],
  courseCategoriesMapped: [],
  levelOfCompetence: [],
  levelOfCompetenceMapped: [],
  durations: [],
  durationsMapped: [],
  countries: [],
  countriesMapped: [],
  getCoursesCategory: async () => {
    const response = await services.helper.getCoursesCategory();

    if (response && response.data && response.data.course_categories) {
      const data = [...response.data.course_categories];
      const maped = data.map((item) => ({
        name: item.name,
        value: item.id,
      }));
      set({
        coursesCategory: [...response.data.course_categories],
        courseCategoriesMapped: [
          { name: "Select Category", value: "" },
          ...maped,
        ],
      });
    }
  },
  getLevelOfCompetence: async () => {
    const response = await services.helper.getLevelOfCompetence();

    if (response && response.data && response.data.level_of_competences) {
      const data = [...response.data.level_of_competences];
      const maped = data.map((item) => ({
        name: item.name,
        value: item.level_of_competence_id,
      }));
      set({
        levelOfCompetence: [...response.data.level_of_competences],
        levelOfCompetenceMapped: [...maped],
      });
    }
  },
  getCourseDurations: async () => {
    const response = await services.helper.getDurations();

    if (response && response.data && response.data.duration_result) {
      const data = [...response.data.duration_result];
      const maped = data.map((item) => ({
        name: item.name,
        value: item.duration_id,
      }));
      set({
        durations: [...response.data.duration_result],
        durationsMapped: [...maped],
      });
    }
  },
  getCountries: async () => {
    const response = await services.helper.getAllCountries();

    if (response && response.data && response.data.countries) {
      const data = [...response.data.countries];
      const maped = data.map((item) => ({
        name: item.country_name,
        value: item.country_id,
      }));
      set({
        countries: [...response.data.countries],
        countriesMapped: [...maped],
      });
    }
  },
}));
