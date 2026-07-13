import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";

import { mockSubjects as MOCK_SUBJECTS } from "@/data/mockSubjects";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord>({ resource }: 
    GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== 'subjects') {
      return { data: [] as TData[], total: 0};
    }
    return {
      data: MOCK_SUBJECTS as unknown as TData[],
      total: MOCK_SUBJECTS.length,
    }
  },

  getOne: async () => {throw new Error('This Fn Is not present')},
  create: async () => {throw new Error('This Fn Is not present')},
  update: async () => {throw new Error('This Fn Is not present')},
  deleteOne: async () => {throw new Error('This Fn Is not present')},
  
  getApiUrl: () => '',
}