import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import Sidebar from "../Sections/Sidebar";

interface postProps {
  post: {
    title: string;
    content: string;
    featuredImage: {
      node: {
        sourceUrl: string;
        altText: string;
      };
    } | null;
    slug: string;
    seo: {
      metaDesc: string;
      title: string;
      opengraphPublishedTime: string;
      opengraphModifiedTime: string;
    };
    categories: {
      nodes: { name: string; slug: string }[];
    };
  };
}

export default function postpost({ post }: postProps) {
  return (
    <>
      {/* <div className="max-w-[1250px] mx-auto px-5 2xl:px-0 mt-16 mb-16">
        <div className="lg:flex gap-10">
          <div className="lg:w-8/12">
            <article>
              <div className="mb-4">
                <Link
                  href={`${post.categories.nodes[0].slug}`}
                  className="text-lg text-sky-600 font-semibold capitalize underline"
                >{post.categories.nodes[0].name}</Link>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-2">
                {post.title}
              </h1>
              <p className="text-zinc-800 mb-3.5 text-md md:text-xl">
                {post.seo.metaDesc}
              </p>
              <div className="flex justify-between xs:flex-col items-center mb-6">
                <div className="flex justify-center items-center gap-2">
                  <p className="mb-1 text-lg">
                    <span className="font-semibold text-zinc-950 capitalize text-lg">
                      By:
                    </span>{" "}
                    Hamza Aniffour
                  </p>
                  <p className="mb-1 text-lg">
                    <span className="font-semibold text-zinc-950 capitalize text-lg">
                      Updated:
                    </span>{" "}
                    {new Date(
                      post.seo.opengraphPublishedTime
                    ).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex justify-center items-center gap-0">
                  <span className="text-lg text-zinc-950 capitalize mr-2">
                    Share this on:
                  </span>
                  <FaFacebook className="w-6 h-6 mr-1 text-[#3b5998]" />
                  <FaWhatsapp className="w-6 h-6 mr-1 text-[#25d366]" />
                  <FaXTwitter className="w-6 h-6 mr-1 text-black" />
                  <FaPinterest className="w-6 h-6 text-[#bd081c]" />
                </div>
              </div>
              {post.featuredImage && (
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  width={0}
                  height={0}
                  layout="responsive"
                  className="mb-8 rounded w-full h-full"
                />
              )}
              <div
                className="blog_content text-zinc-800 font-normal text-xl"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>
          <div className="lg:w-4/12">
            <div className="sticky top-[50px] mb-14">
              <div className="w-full h-auto bg-slate-100 mb-6 p-5 rounded-lg">
                <h3 className="text-xl text-zinc-950 font-bold mb-2">
                  More From {post.categories.nodes[0].name}
                </h3>
                <div className="h-0.5 w-[130px] bg-lime-400 mb-2"></div>
                <p className="text-zinc-900 text-md mb-6 font-medium leading-6">
                  Explore our curated collection of insightful articles in the{" "}
                  {post.categories.nodes[0].name} category.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="max-w-7xl lg:max-w-6xl mx-auto px-4 mt-[100px] mb-24">
        <div className="lg:flex gap-14">
          <div className="lg:w-1/12 order-first lg:order-last xl:order-last">
            <div className="sticky top-[80px] mb-14">
              <div className="lg:w-1/12 order-first lg:order-last xl:order-last">
                <div className="text-[#e40046] text-xs tracking-wide uppercase font-semibold mb-2 lg:hidden xl:hidden ml-3">
                  Share this on:
                </div>
                <div className="flex justify-start lg:justify-center xl:justify-center items-start sticky top-[50px]">
                  <div className="bg-slate-100 flex justify-center items-center flex-row md:flex-col py-2 px-4 rounded-full mb-5">
                    <ul className="">
                      <li className="mb-0 lg:mb-3 xl:mb-3 inline-block md:inline lg:block xl:block mr-3 lg:mr-0 xl:mr-0">
                        <Link
                          href={`https://www.facebook.com/sharer/sharer.php?u=${post.slug}&quote=${post.title}`}
                          target="_blank"
                          className="tooltip"
                          data-tip="Share on facebook"
                        >
                          <FaFacebookF className="h-6 w-6 text-slate-600 hover:text-[#1877F2]" />
                        </Link>
                      </li>
                      <li className="mb-0 lg:mb-3 xl:mb-3 inline-block md:inline lg:block xl:block mr-3 lg:mr-0 xl:mr-0">
                        <Link
                          href={`https://www.linkedin.com/shareArticle?url=${post.slug}&title=${post.title}`}
                          target="_blank"
                          className="tooltip"
                          data-tip="Share on LinkedIn"
                        >
                          <FaLinkedinIn className="h-6 w-6 text-slate-600 hover:text-[#0A66C2]" />
                        </Link>
                      </li>
                      <li className="mb-0 lg:mb-3 xl:mb-3 inline-block md:inline lg:block xl:block mr-3 lg:mr-0 xl:mr-0">
                        <Link
                          href={`https://pinterest.com/pin/create/bookmarklet/?media=${post.featuredImage?.node.sourceUrl}&url=${post.slug}&description=${post.title}`}
                          target="_blank"
                          className="tooltip"
                          data-tip="Share on Pinterest"
                        >
                          <FaPinterest className="h-6 w-6 text-slate-600 hover:text-[#C8232C]" />
                        </Link>
                      </li>
                      <li className="mb-0 lg:mb-3 xl:mb-3 inline-block md:inline lg:block xl:block mr-3 lg:mr-0 xl:mr-0">
                        <Link
                          href={`https://twitter.com/share?url=${post.slug}&text=${post.title}`}
                          target="_blank"
                          className="tooltip"
                          data-tip="Share on X"
                        >
                          <RiTwitterXLine className="h-6 w-6 text-slate-600 hover:text-[#000000]" />
                        </Link>
                      </li>
                      <li className="inline-block md:inline lg:block xl:block">
                        <Link
                          href={`https://api.whatsapp.com/send?text=${post.title} ${post.slug}`}
                          target="_blank"
                          className="tooltip"
                          data-tip="Share on WhatsApp"
                        >
                          <FaWhatsapp className="h-6 w-6 text-slate-600 hover:text-[#25D366]" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-7/12">
            <article key={post.slug}>
              <header>
                <div className="text-sm breadcrumbs mb-3">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li className="font-semibold">{post.title}</li>
                  </ul>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl mb-7 !leading-20 text-black font-bold">
                  {post.title}
                </h1>
              </header>
              <section>
                <img
                  src={post.featuredImage?.node.sourceUrl}
                  width={1000}
                  height={500}
                  alt={post.featuredImage?.node.altText}
                  className="w-full mb-6"
                />
              </section>
              <p
                className="text-slate-500 mb-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></p>
            </article>
          </div>
          <div className="lg:w-3/12 order-last lg:order-first xl:order-first">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
