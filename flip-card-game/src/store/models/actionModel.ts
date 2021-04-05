export interface Action<T> {
  type: string;
  payload?: T;
}

export interface GetFakeDataList {
 
  url?: string;
  place?:string;
  hint?: string;
}

export interface PostFakeDataObject {
  body: string;
  id?: number;
  title: string;
  userId: number;
}

export interface FakeDataModal {
  fakeDataList: GetFakeDataList[];
  postResponseData: PostFakeDataObject;
}
