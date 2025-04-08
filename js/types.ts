/**********************************************
  Common types
**********************************************/
export type TitleData = {
  content: string;
  priority: number;
};

export type LinkData = {
  name: string;
  url: string;
};

export type ImageData = {
  source: string;
  description: string;
};

/**********************************************
  Header types
**********************************************/
export type LangData = {
  key: string;
  name: string;
};

export type NavIteamData = {
  name: string;
  key: string;
};

export type HeaderData = {
  langs: LangData[];
  navigation: NavIteamData[];
};

/**********************************************
  Download types
**********************************************/
export type DownloadData = {
  title: TitleData;
  texts: number[];
  links: LinkData[];
  image: ImageData;
};

/**********************************************
  Warranty types
**********************************************/
export type WarrantyData = {
  title: TitleData;
  texts: number[];
  image: ImageData;
};

/**********************************************
  Care types
**********************************************/
export type CareData = {
  title: TitleData;
  texts: number[];
  image: ImageData;
};

/**********************************************
  Cashback types
**********************************************/
export type CashbackData = {
  title: TitleData[];
  texts: number[];
  buttonText: string;
};

/**********************************************
  Clients types
**********************************************/
type logoSource = {
  lightsource: string;
  darksource: string;
};

export type Client = {
  name: string;
  logo: logoSource;
};

export type ClientsData = {
  brands: Client[];
};

/**********************************************
  Footer types
**********************************************/
export type ColumnData = {
  title: TitleData[];
  links: LinkData[];
};

export type SecondaryInfoData = {
  column: ColumnData[];
  texts: string[];
};

/**********************************************
  Modal types
**********************************************/
export type CheckboxData = {
  url: string;
  type: string;
  content: string;
};

type Select = {
  value: string;
  optionText: string;
};

export type SelectData = {
  selectText: string;
  selects: Select[];
};

export type InputData = {
  type: string;
  placeholder: string;
  id: string;
};

export type ModalData = {
  title: TitleData[];
  input: InputData[];
  buttonText: string;
}
/**********************************************
  AppData
**********************************************/
export type AppData = {
  primaryInfo: HeaderData;
  download: DownloadData;
  warranty: WarrantyData;
  care: CareData;
  cashback: CashbackData;
  clients: ClientsData
  secondaryInfo: SecondaryInfoData;
  modal: ModalData;
};
/*********************************************/
