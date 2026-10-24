export interface ProjectItem {
  id: string;
  title: string;
  url: string;
  category: string;
  description: string;
  videoUrl: string;
  thumbnailUrl?: string;
  badge: string;
}

export interface FavoriteItem {
  id: string;
  category: string;
  name: string;
  imageUrl: string;
  description?: string;
}

export interface UserProfile {
  name: string;
  age: number;
  greeting: string;
  mainSiteUrl: string;
  photoUrl: string;
  goal: string;
  hobbies: string[];
  favorites: FavoriteItem[];
  projects: ProjectItem[];
}
