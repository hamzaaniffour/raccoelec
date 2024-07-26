import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";
// import IMG1 from "@/public/demos/6.png";
// import IMG2 from "@/public/demos/2.jpg";
// import IMG3 from "@/public/demos/3.jpg";
// import IMG4 from "@/public/demos/4.jpg";
// import IMG5 from "@/public/shutterstock.webp";
import { FaArrowRightLong } from "react-icons/fa6";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

interface Post {
  title: string;
  slug: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    } | null;
  } | null;
}

interface CategoryProps {
  category: {
    name: string;
    description: string;
    slug: string;
    posts: {
      nodes: Post[];
    };
    children?: {
      nodes: {
        posts: { nodes: Post[] };
        name: string;
        slug: string;
        description: string;
      }[];
    };
  };
}

export default function CategoryPage({ category }: CategoryProps) {
  const hasSubcategories =
    category.children?.nodes && category.children.nodes.length > 0;

  return (
    <div className="max-w-[1250px] mx-auto px-5 2xl:px-0 mt-24 mb-24">
      <h1
        className={`${anton.className} text-5xl md:text-6xl lg:text-7xl font-bold xl:text-7xl mb-6 text-zinc-950 uppercase text-center decoration-lime-400 underline`}
      >
        {category.name}
      </h1>
      <div className="flex justify-center items-center mb-16">
        <p className="max-w-[900px] font-medium text-lg text-center text-zinc-900">
          {category.description}
        </p>
      </div>
      <h2
        className={`${anton.className} text-3xl lg:text-4xl text-zinc-900 font-bold uppercase mb-8 border-l-[6px] border-lime-300 pl-2`}
      >
        Featured Guides
      </h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {category.posts.nodes.map((post) => (
          <div key={post.slug} className="w-full">
            <Link href={`/${category.slug}/${post.slug}`}>
              {post.featuredImage && post.featuredImage.node && (
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover mb-2"
                />
              )}
              <h3 className="text-xl text-zinc-950 font-semibold hover:text-blue-600">
                {post.title}
              </h3>
            </Link>
          </div>
        ))}
      </div> */}

      {/* <div className="lg:flex gap-2 mb-24">
        <div className="lg:w-6/12">
          <div className="grid grid-cols-1">
            <div className="w-full rounded overflow-hidden">
              <div className="relative">
                <Image
                  src={IMG1}
                  alt="Tires 2024"
                  quality={100}
                  className="rounded"
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-1 pb-0 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-2xl font-bold text-white">
                    Size Matters: How Choosing the Right Tire Dimensions Can
                    Transform Your Drive
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="w-full rounded overflow-hidden">
              <div className="relative">
                <Image
                  src={IMG2}
                  alt="Tires 2024"
                  quality={100}
                  className="rounded"
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 pb-0 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-[17px] font-bold text-white">
                    Breaking Down Tire Size: The Science Behind Speed.
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full rounded overflow-hidden">
              <div className="relative">
                <Image
                  src={IMG3}
                  alt="Tires 2024"
                  quality={100}
                  className="rounded"
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 pb-0 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-[17px] font-bold text-white">
                    From Inches to Impact: How Tire Size Affects Fuel Efficiency
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full rounded overflow-hidden">
              <div className="relative">
                <Image
                  src={IMG4}
                  alt="Tires 2024"
                  quality={100}
                  className="rounded"
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 pb-0 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-[17px] font-bold text-white">
                    Fit for Purpose: Matching Tire Size to Terrain for Off-Road
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full rounded overflow-hiddeg">
              <div className="relative">
                <Image
                  src={IMG5}
                  alt="Tires 2024"
                  quality={100}
                  className="rounded"
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 pb-0 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-[17px] font-bold text-white">
                    Bigger Isn&#39;t Always Better: Debunking Common Myths
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {hasSubcategories && (
        <>
          <div className="mb-12">
            {category?.children?.nodes.map((subcategory) => (
              <div key={subcategory.slug} className="mb-8">
                <h2
                  className={`${anton.className} text-3xl lg:text-4xl text-zinc-900 font-bold uppercase mb-2 border-l-[6px] border-lime-300 pl-2`}
                >
                  {subcategory.name}
                </h2>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg mb-6 text-zinc-950 max-w-[700px]">
                      {subcategory.description}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={`/${category.slug}/${subcategory.slug}`}
                      className="text-lime-600 text-lg font-bold capitalize hover:underline"
                    >
                      More {subcategory.name}{" "}
                      <FaArrowRightLong className="inline-block ml-0.5 size-4" />
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {subcategory.posts.nodes.map((post) => (
                    <div key={post.slug} className="w-full">
                      <Link href={`/${post.slug}`}>
                        {post.featuredImage && post.featuredImage.node && (
                          <Image
                            src={post.featuredImage.node.sourceUrl}
                            alt={post.featuredImage.node.altText || post.title}
                            width={300}
                            height={300}
                            className="w-full object-cover mb-2 rounded-lg"
                          />
                        )}
                        <h3 className="text-[19px] text-zinc-950 font-semibold">
                          {post.title}
                        </h3>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
