type Images = {
  width: number;
  height: number;
  url: string;
};

type Artists = {
  name: string;
  uri: string;
  id: string;
};

type Item = {
  played_at: string;
  track: {
    name: string;
    album: {
      images: Images[];
    };
    artists: Artists[];
  };
};

export type IRecentlyPlayed = {
  items: Item[];
};
