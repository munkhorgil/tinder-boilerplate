export type Info = {
  age: number;
  type: string;
  gender: string;
  sexuality: string;
  name: string;
  about: string;
  desires: Array<string>;
  interests: Array<string>;
};

export type User = {
  id: string;
  info: Info;
  associated?: Info;
  photos: [
    {
      url: string;
      width: number;
      height: number;
    }
  ];
};
