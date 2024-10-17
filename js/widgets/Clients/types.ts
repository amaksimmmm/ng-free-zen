type logoSource = {
  lightsource: string;
  darksource: string;
};

type Client = {
  name: string;
  logo: logoSource;
};

export type ClientsData = {
  brands: Client[];
};
