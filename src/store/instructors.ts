import create from "zustand";
import * as services from "services";

interface InstructorState {
  getInstructors: () => void;
  getInstructorsFilter: (query: any) => void;
  getAnInstructor: (id: any) => void;
  instructors: Array<{}>;
  instructor: any;
  isLoadingInstructors: boolean;
  isLoadingInstructor: boolean;
}

export const useInstructor = create<InstructorState>()((set) => ({
  isLoadingInstructors: false,
  isLoadingInstructor: false,
  instructors: [],
  instructor: {},
  getInstructors: async () => {
    try {
      const response = await services.instructor.getAllInstructors();
      set({ instructors: [...response.data.all_instructors.data] });
    } catch (error) {}
  },
  getInstructorsFilter: async (query) => {
    set({ isLoadingInstructors: true });
    try {
      const response = await services.instructor.getInstructors(query);
      if (
        response.data.message.toLowerCase() ===
        "No instructor found".toLowerCase()
      ) {
        set({ instructors: [], isLoadingInstructors: false });
      } else {
        set({
          instructors: [...response.data.courses.data],
          isLoadingInstructors: false,
        });
      }
      
    } catch (error) {
      set({
        instructors: [],
        isLoadingInstructors: false,
      });
    }
  },
  getAnInstructor: async (id: any) => {
    try {
      const response = await services.instructor.getAnInstructor(id);
      set({ instructor: { ...response.data.instructor_info } });
    } catch (error) {}
  },
}));
