import { User } from './User';
export interface Ad {
  id: number;
  title: string;
  description: string;
  type: Type;
  category: Category;
  likes: number[];
  appliedUsers: Map<number, Status>;
  organization: number;
}

enum Type {
  partTime = 'part-time',
  fullTime = 'full-time',
  remote = 'remote',
}

enum Category {
  officeAdministration = 'Office administration',
  development = 'Development',
}

enum Status {
  rejected = 'Rejected',
  confirmed = 'Confirmed',
  notViewed = 'Not Viewed',
}
