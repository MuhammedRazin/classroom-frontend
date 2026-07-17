import { Subject } from "@/types";

interface SubjectsResponse {
  data: Subject[];
  departmentList: string[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const fetchDepartmentNames = async () => {

    const BACKEND_URL = import.meta.env.VITE_BACKEND_BASE_URL;

    const res = await fetch(`${BACKEND_URL}/subjects`);

    const result: SubjectsResponse = await res.json();

    return result.departmentList;
}