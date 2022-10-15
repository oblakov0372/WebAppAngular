import { Ad } from './IAd';

export interface Organization {
  id: number;
  name: string;
  email: string;
  password: string;
  Ads: Ad[];
  acceptedUsers: Map<number, number>;
}
