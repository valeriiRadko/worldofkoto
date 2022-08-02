export type ScrollElement =
  | "gallery"
  | "art"
  | "game"
  | "signup"
  | "team"
  | "advisors";

export interface TeamMember {
  name: string;
  position: string;
  description: string;
  photo: string;
}

export interface MenuItem {
  label: string;
  scrollElement: ScrollElement;
}
