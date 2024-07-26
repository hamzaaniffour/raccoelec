import { gql } from "graphql-request";
import { client } from "@/app/api/graphql-client";

export interface Category {
  id: string;
  name: string;
  slug: string;
  featuredImage: string;
}

interface CategoriesQueryResult {
  categories: {
    nodes: Category[];
  };
}

const GET_CATEGORIES = gql`
  query GetTopLevelCategories {
    categories(where: { parent: null }) {
      nodes {
        id
        name
        slug
        featuredImage
      }
    }
  }
`;

export async function getCategories(): Promise<Category[]> {
  try {
    const data = await client.request<CategoriesQueryResult>(GET_CATEGORIES);
    return data.categories.nodes;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}