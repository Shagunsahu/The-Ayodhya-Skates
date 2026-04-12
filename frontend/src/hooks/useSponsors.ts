import { useQuery } from "@tanstack/react-query";

export interface Sponsor {
  id: string;
  name: string;
  logo_url: string | null;
  logo_emoji: string | null;
  sponsor_type: string;
  website_url: string | null;
  display_order: number;
}

export interface Partner {
  id: string;
  name: string;
  logo_url: string | null;
  logo_emoji: string | null;
  description: string | null;
  website_url: string | null;
  display_order: number;
}

export const useSponsors = () => {
  return useQuery({
    queryKey: ["sponsors"],
    queryFn: async () => {
      // TODO: Fetch from new backend API
      return [] as Sponsor[];
    },
  });
};

export const usePartners = () => {
  return useQuery({
    queryKey: ["partners"],
    queryFn: async () => {
      // TODO: Fetch from new backend API
      return [] as Partner[];
    },
  });
};
