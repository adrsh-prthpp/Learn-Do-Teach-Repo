export type Database = {
  public: {
    Tables: {
      videos: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string;
          category: "AI/ML" | "Data" | "Cloud";
          youtube_url: string;
          thumbnail_url: string | null;
          tags: string[];
          featured: boolean;
          published_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          description: string;
          category: "AI/ML" | "Data" | "Cloud";
          youtube_url: string;
          thumbnail_url?: string | null;
          tags?: string[];
          featured?: boolean;
          published_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["videos"]["Insert"]>;
      };
      blog_posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          cover_image_url: string | null;
          tags: string[];
          featured: boolean;
          published_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          cover_image_url?: string | null;
          tags?: string[];
          featured?: boolean;
          published_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["blog_posts"]["Insert"]>;
      };
      projects: {
        Row: {
          id: string;
          name: string;
          slug: string;
          category: "AI/ML" | "Data" | "Cloud";
          summary: string;
          description: string;
          github_url: string | null;
          demo_url: string | null;
          video_slug: string | null;
          image_url: string | null;
          featured: boolean;
          published_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          category: "AI/ML" | "Data" | "Cloud";
          summary: string;
          description: string;
          github_url?: string | null;
          demo_url?: string | null;
          video_slug?: string | null;
          image_url?: string | null;
          featured?: boolean;
          published_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["projects"]["Insert"]>;
      };
    };
  };
};
