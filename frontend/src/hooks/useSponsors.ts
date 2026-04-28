import { useQuery } from "@tanstack/react-query";
import { resolvePartnerLogo } from "@/lib/partnerLogoRegistry";

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
  image?: string | null;
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
      const apiUrl = import.meta.env.VITE_API_URL || "";
      const response = await fetch(`${apiUrl}/api/partners`);

      if (!response.ok) {
        throw new Error(`Failed to fetch partners: ${response.status}`);
      }

      const data = (await response.json()) as Array<{
        id: string;
        name: string;
        image?: string | null;
      }>;

      return data.map((partner) => ({
        id: partner.id,
        name: partner.name,
        logo_url: resolvePartnerLogo(partner.image ?? null, partner.name),
        logo_emoji: null,
        description: null,
        website_url: null,
        display_order: 0,
        image: partner.image ?? null,
      })) as Partner[];
    },
  });
};
