import React from "react";
import Link from "next/link";

const Sidebar = async () => {
//   function limitWords(text: string, limit: number): string {
//     const words = text.split(" ");
//     if (words.length > limit) {
//       return words.slice(0, limit).join(" ") + "...";
//     }
//     return text;
//   }

  return (
    <>
      <div className="w-full h-auto bg-slate-100 mb-6 p-5 rounded-xl">
        <h3 className="text-xl text-black font-bold mb-2">Meilleurs articles</h3>
        <div className="h-0.5 w-[100px] bg-[#1523dc] mb-2"></div>
        <p className="text-slate-800 text-md mb-6 font-medium leading-6">
          Certains des meilleurs contenus que nous avons publiés jusqu&#39;à présent.
        </p>
        <div className="">
          <ol className="sidebarlist list-decimal list-inside">
              <li
                className="mb-3 border-b-[1px] border-slate-200 pb-3 leading-5"
                // key={post.node.slug}
              >
                <Link
                  href={`/`}
                  className="font-semibold text-slate-800 text-[0.9rem] transition-all hover:underline hover:text-[#1523dc] capitalize"
                >
                  Understanding Tire Pressure: Tips for Safe and Efficient Driving
                </Link>
              </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
