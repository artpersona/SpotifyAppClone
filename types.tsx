export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen: undefined; 
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type albumCategory = {
  id: string,
  title: string,
  albums: []
}

export type album = {
  id: string;
  imageUri: string;
  artistHeadline: string;
  name:string,
  numberOfLikes: number
  by: string
}

export type Song = {
  id: string,
  imgUri: string,
  title: string,
  artist: string
}
