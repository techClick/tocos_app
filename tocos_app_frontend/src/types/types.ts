import { ReactElement } from 'react';

export type IResponse = {
  status: 'error' | 'success',
  data?: string,
  description: string,
};

export type CallArgs = {
  prefix: 1 | 2,
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

type ShowPopupKeys = {
  component?: ReactElement | false,
  exitOnBgClick?: boolean,
  action?: Function,
}
export type ShowPopup = {
  [key in keyof ShowPopupKeys]: ShowPopupKeys[key]
};

type SearchKeys = {
  text?: string,
  showResult?: boolean,
}

export type Search = {
  [key in keyof SearchKeys]: SearchKeys[key]
}

type RowSearchTypesKeys = {
  text?: string,
  isInvertSearch?: boolean,
}

export type RowSearchTypes = {
  [key in keyof RowSearchTypesKeys]: RowSearchTypesKeys[key]
}

export type RowSearch = {
  [key: string]: RowSearchTypes,
}

type SearchTypesKeys = {
  globalSearch?: Search,
  dateSearch?: Search,
  rowSearch?: RowSearch,
}

export type SearchTypes = {
  [key in keyof SearchTypesKeys]: SearchTypesKeys[key]
}

export type Headers = {
  [key: string]: string
}

type SetValuesKeys = {
  ids: number[],
  row: string,
  value: string,
}

export type SetValues = {
  [key in keyof SetValuesKeys]: SetValuesKeys[key]
}

type EditsKeys = {
  search?: SearchTypes,
  headers?: Headers,
  rowValues?: SetValues[],
  isSelectAllColumns?: boolean;
  deleteValues?: SetValues[],
}

export type Edits = {
  [key in keyof EditsKeys]: EditsKeys[key]
}

export type SheetEntry = {
  [key: string]: string | null | undefined
}

type EditStepKeys = {
  name: string,
  description: string,
  edits: Edits,
  saveThis: boolean,
  isSearch?: boolean,
}

export type EditStep = {
  [key in keyof EditStepKeys]: EditStepKeys[key]
}

type SheetKeys = {
  name: string,
  data: Array<SheetEntry>,
  displaySheet: Array<SheetEntry>,
  allDisplaySheet: Array<SheetEntry>,
  date: Date,
  isSortRow?: boolean,
  edits: Edits,
  editSteps: EditStep[],
  editStep: number,
}

export type Sheet = {
  [key in keyof SheetKeys]: SheetKeys[key]
};

export type DisplaySheet = Array<SheetEntry>;

type SettingsKeys = {
  isSortRow: Array<boolean>,
}

export type Settings = {
  [key in keyof SettingsKeys]: SettingsKeys[key]
};

export type SelectedBuild = null | 'value' | 'item' | 'date';

type ChartBuildKeys = {
  item?: string,
  value?: string,
  date?: string,
}

export type ChartBuild = {
  [key in keyof ChartBuildKeys]: ChartBuildKeys[key]
};

type ChartSheetEntryKeys = {
  name: string,
  value: number,
}
export type ChartSheetEntry = {
  [key in keyof ChartSheetEntryKeys]: ChartSheetEntryKeys[key]
}

type ChartSheetKeys = {
  date: Date,
  data: ChartSheetEntry[],
  chartType: string,
  name: string,
  prefix?: string,
  suffix?: string,
}

export type ChartSheet = {
  [key in keyof ChartSheetKeys]: ChartSheetKeys[key]
};
