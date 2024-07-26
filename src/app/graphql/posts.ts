import { gql } from "graphql-request";
import { client } from "@/app/api/graphql-client";

export interface Post {
  id: string;
  title: string;
  seo: {
    metaDesc: string;
    title: string;
    opengraphPublishedTime: string;
    opengraphModifiedTime: string;
  };
  slug: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  } | null;
}

interface PostsQueryResult {
  posts: {
    nodes: Post[];
  };
}

const POPULAR_POSTS = gql`
  query GetPosts {
    posts(first: 4, where: { orderby: { field: COMMENT_COUNT, order: DESC } }) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        seo {
          metaDesc
          title
          opengraphPublishedTime
          opengraphModifiedTime
        }
      }
    }
  }
`;

// POPULAR POSTS
export async function popular_Posts(): Promise<Post[]> {
  try {
    const data = await client.request<PostsQueryResult>(POPULAR_POSTS);
    return data.posts.nodes;
  } catch (error) {
    return [];
  }
}
