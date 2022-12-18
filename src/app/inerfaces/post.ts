import { IUser } from "./user";
import { ITheme } from "./theme";

export interface IPost {
  _id: string;
  likes: string[];
  text: string;
  userId: IUser;
  themeId: ITheme;
  created_at: string;
  updated_at: string;
}
