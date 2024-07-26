import { popular_Posts } from "@/app/graphql/posts";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";

const open_sans = Open_Sans({ subsets: ["latin"], weight: "800" });

const Blogs = async () => {
  const posts = await popular_Posts();
  return (
    <div className="mt-24 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center flex-col mb-9">
          <h3
            className={`${open_sans.className} text-2xl text-zinc-950 font-bold text-center mb-2`}
          >
            Actualités Business par Reccoelec
          </h3>
        </div>

        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          {posts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {posts.map((post, index) => (
                <Link
                  className="group flex flex-col focus:outline-none"
                  href={`/${post.slug}`}
                  key={post.slug}
                >
                  <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                    <img
                      className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                      src={
                        post.featuredImage?.node.sourceUrl ||
                        "https://via.placeholder.com/600"
                      }
                      alt={post.title}
                    />
                    <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-[#1523dc] text-white py-1.5 px-3 dark:bg-neutral-900">
                      Entreprise
                    </span>
                  </div>
                  <div className="flex justify-start items-center gap-2 mt-3 mb-3">
                    <p className="text-xs text-gray-500">Raccoelec</p>
                    <p className="text-xs text-gray-500">-</p>
                    <p className="text-xs text-gray-500">25 Jul 2024</p>
                  </div>
                  <div>
                    <h3 className="text-md font-semibold text-zinc-950">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 text-gray-500 dark:text-neutral-200 text-sm">
                      Produce professional, reliable streams easily with
                      Preline.
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
