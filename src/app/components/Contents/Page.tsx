import Link from "next/link";
import React from "react";

interface pageProps {
  page: {
    title: string;
    content: string;
    slug: string;
  };
}

export default function pagePage({ page }: pageProps) {
  return (
    <div className="max-w-[1250px] mx-auto px-5 2xl:px-0 mt-16 mb-16">
      <div className="lg:flex gap-10">
        <div className="lg:w-8/12">
          <article>
            <h1 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-5">
              {page.title}
            </h1>
            <div
              className="blog_content text-zinc-800 font-normal text-lg"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </article>
        </div>
      </div>
    </div>
  );
}
