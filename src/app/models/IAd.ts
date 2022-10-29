export interface Ad {
  id: number;
  title: string;
  description: string;
  type: Type;
  category: Category;
  likes: number[];
  appliedUsers: AppliedUser[];
  organization: number;
}
export interface AppliedUser {
  id: number;
  status: Status;
}

export enum Type {
  partTime = 'part-time',
  fullTime = 'full-time',
  remote = 'remote',
}

export enum Category {
  officeAdministration = 'Office administration',
  development = 'Development',
}

export enum Status {
  rejected = 'Rejected',
  confirmed = 'Confirmed',
  notViewed = 'Not Viewed',
}
