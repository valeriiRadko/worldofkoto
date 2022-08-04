import { MenuItem, TeamMember } from "../components/types";

export const AVALANCHE_MAINNET_PARAMS = {
  chainId: "0xA86A",
  chainName: "Avalanche Mainnet C-Chain",
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
  },
  rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://snowtrace.io/"],
};

export const team: TeamMember[] = [
  {
    name: "Sanayei",
    position: "Co-founder/ceo",
    description:
      "Digital marketer with over 10 years experience leading digital strategy for a variety of top brands. Likes to right-click-save and go fast.",
    photo: "/team/blank.jpeg",
  },
  {
    name: "Lou Manace",
    position: "CTO",
    description:
      "Experienced software engineer who specializes in the development of decentralized applications running on blockchain technology.",
    photo: "/team/blank.jpeg",
  },
  {
    name: "Tommy Hines",
    position: "Creative director",
    description:
      "11+ years of experience handcrafting websites, apps, and digital strategies focused on increasing conversion rates and customer experiences.",
    photo: "/team/tommy.jpeg",
  },
  {
    name: "Greg Larson",
    position: "Lead CREATIVE Writer",
    description:
      "Author, ghostwriter, and editor of over 100 books, including USA Today and Wall Street Journal bestsellers.",
    photo: "/team/greg.jpeg",
  },
  {
    name: "Sasha Belitskaja",
    position: "3d Artist",
    description:
      "Sasha is an architectural designer and XR developer who’s obsessed with creating new aesthetics. She’s also the co-founder of iHeartBlob, an award-winning architectural design studio.",
    photo: "/team/sasha.jpeg",
  },
];

export const menuItem: MenuItem[] = [
  { label: "Gallery", scrollElement: "gallery" },
  { label: "Art", scrollElement: "art" },
  { label: "Game", scrollElement: "game" },
  { label: "Sign Up", scrollElement: "signup" },
  { label: "Team", scrollElement: "team" },
  // { label: "Advisors", scrollElement: "advisors" },
];
