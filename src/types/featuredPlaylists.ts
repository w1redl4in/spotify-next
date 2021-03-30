export type IItem = {
  description: string;
  external_urls: {
    spotify: string;
  };
  id: string;
  images: [
    {
      height: number;
      url: string;
      width: number;
    }
  ];
  name: string;
  owner: {
    display_name: string;
  };
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
};

export type IFeaturedPlaylists = {
  message: string;
  playlists: {
    items: IItem[];
  };
};
