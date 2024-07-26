import React from "react";
import { notFound } from "next/navigation";
import { getContentBySlug, getAllSlugs } from "@/app/api/content";

import CategoryPage from "@/app/components/Contents/Category";
import Page from "@/app/components/Contents/Page";
import Post from "@/app/components/Contents/Post";

export default async function DynamicPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug.join("/");
  let content = await getContentBySlug(slug);

  if (!content) {
    // If content is not found, it might be a subcategory
    const parentSlug = params.slug[0];
    const parentContent = await getContentBySlug(parentSlug);

    if (parentContent && parentContent.type === "category") {
      const childSlug = params.slug.slice(1).join("/");
      content = await getContentBySlug(childSlug);

      if (content) {
        content = {
          ...content,
          parentSlug: parentSlug,
          isSubCategory: true,
        };
      } else {
        notFound();
      }
    } else {
      notFound();
    }
  }

  switch (content.type) {
    case "category":
      return <CategoryPage category={content} />
    case "page":
      return <Page page={content} />;
    case "post":
      return <Post post={content} />;
    default:
      notFound();
  }
}
