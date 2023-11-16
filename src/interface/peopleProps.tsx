export interface UserType {
    name: string;
    unicode: number;
    avatar: string;
  }
  export  interface DataType {
    letter: string;
    hasData: boolean;
    users: UserType[];
  }