import { Ad } from './IAd';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  candidateAds: Ad[];
  likeAds: Ad[];
}
