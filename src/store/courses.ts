import create from "zustand";
import * as services from "services";

interface CoursesState {
  getCourses: () => void;
  getACourses: (id: any) => void;
  getFilteredCourses: (data: any) => void;
  getAllCourses: (data: any) => void;
  courses: Array<{}>;
  fiilteredCourses: Array<{}>;
  course: any;
  isLoading: boolean;
  isLoadingCourses: boolean;
  isLoadingCoursesSearch: boolean;
}

export const useCourse = create<CoursesState>()((set) => ({
  isLoading: false,
  isLoadingCourses: false,
  isLoadingCoursesSearch: false,
  courses: [],
  fiilteredCourses: [],
  course: {},
  getCourses: async () => {
    try {
      const response = await services.courses.getCourses();
      set({ courses: [...response.data.courses.data] });
    } catch (error) {}
  },
  getACourses: async (id: any) => {
    set({ isLoading: true });

    try {
      const response = await services.courses.getACourse(id);
      set({ course: { ...response.data.course }, isLoading: false });
      return { ...response.data.course };
    } catch (error) {
      set({ isLoading: false });
    }
  },
  getFilteredCourses: async (data) => {
    try {
      const response = await services.courses.courseFilter(data);
      if (response.data && !response.data.courses) {
        set({ courses: [] });
      } else {
        set({ courses: [...response.data.courses.data] });
      }
    } catch (error) {}
  },
  getAllCourses: async (data) => {
    set({ isLoadingCourses: true, isLoadingCoursesSearch: true });
    try {
      const response = await services.courses.getAllCourses(data);
      if (
        response.data.message.toLowerCase() === "No course found".toLowerCase()
      ) {
        set({
          courses: [],
          isLoadingCourses: false,
          isLoadingCoursesSearch: false,
        });
      } else {
        set({
          courses: [...response.data.courses.data],
          isLoadingCourses: false,
          isLoadingCoursesSearch: false,
        });
      }
    } catch (error) {
      set({ isLoadingCourses: false, isLoadingCoursesSearch: false });
    }
  },
}));
