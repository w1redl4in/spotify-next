export type IIcon = {
  height: number;
  url: number;
  width: number;
};

export type IItem = {
  href: string;
  icons: IIcon[];
  id: string;
  name: string;
};

export type ICategories = {
  categories: {
    items: IItem[];
  };
};
