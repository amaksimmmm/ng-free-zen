import { ColumnData } from "../../ui/Column/types";

type ContentLink = {
  type: string;
  data: string;
};

export type SecondaryInfoData = {
  column: ColumnData[];
  texts: string[];
};
