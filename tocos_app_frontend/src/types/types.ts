export type IResponse = {
  status: 'error' | 'success',
  data?: string,
  code: number,
};

export type CallArgs = {
  api: string,
  noStatus?: boolean,
  method?: string,
  body?: any,
  type?: 'json' | 'blob',
  token?: string,
  VerifyToken?: string,
  isUnAuthed?: boolean;
  noStringify?: boolean;
  noContentType?: boolean;
};

export type ApiFunctionResult = 0 | 1 | 2 | 3;
