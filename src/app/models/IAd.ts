import { User } from './IUser';

export interface Ad {
  id: number;
  title: string;
  description: string;
  countLikes: number;
  type: Type;
  category: Category;
  candidateUsers: User[];
}

enum Type {
  partTime = 'Part-time',
  fullTime = 'Full-time',
  remote = 'Remote',
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
