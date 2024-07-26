// import Link from "next/link";
// import React from "react";

// const Menu = () => {
//   return (
//     <div className="hidden lg:block">
//       <ul className="flex justify-center items-center gap-7 animate__animated animate__slideInDown">
//         <li>
//           <Link href="#" className="text-[#4F7483] font-semibold">
//             Demander estimation
//           </Link>
//         </li>
//         <li>
//           <Link href="#" className="text-[#4F7483] font-semibold">
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Menu;


import React from "react";
import Link from "next/link";
import { getMenuByName, MenuItem } from "@/app/services/menus";

const hasChildItems = (
  item: MenuItem
): item is MenuItem & { childItems: { nodes: MenuItem[] } } => {
  return !!item.childItems && item.childItems.nodes.length > 0;
};

const cleanCategoryPath = (path: string): string => {
  if (path.startsWith("/category/")) {
    return "/" + path.split("/").slice(2).join("/");
  }
  return path;
};

const MenuItemComponent = ({ item }: { item: MenuItem }) => {
  const rawHref =
    item.path ||
    item.url ||
    item.uri ||
    `/${item.label.toLowerCase().replace(/\s+/g, "-")}`;
  const href = cleanCategoryPath(rawHref);

  if (hasChildItems(item)) {
    return (
      <li className="relative group">
        <Link
          href={href}
          className="text-md font-bold capitalize"
        >
          {item.label}
        </Link>
        <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg hidden group-hover:block">
          {item.childItems.nodes.map((childItem) => {
            const rawChildHref =
              childItem.path ||
              childItem.url ||
              childItem.uri ||
              `/${childItem.label.toLowerCase().replace(/\s+/g, "-")}`;
            const childHref = cleanCategoryPath(rawChildHref);
            return (
              <li key={childItem.id} className="px-4 py-2 hover:bg-gray-100">
                <Link href={childHref} className="text-[#4F7483] font-semibold">
                  {childItem.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }

  return (
    <li>
      <Link href={href} className="text-[#4F7483] font-semibold">{item.label}</Link>
    </li>
  );
};

export default async function Menu() {
  const menuItems = await getMenuByName("Raccolec");

  if (!menuItems) {
    return <div>Menu not found</div>;
  }

  if (typeof menuItems === "string") {
    return <div>{menuItems}</div>; // Display the error message if menuItems is a string
  }

  // Filter top-level items (items without a parent)
  const topLevelItems = menuItems.filter((item) => !item.parentId);

  return (
        <nav className="hidden lg:block">
          <ul className="flex justify-center items-center gap-[19px]">
            {topLevelItems.map((item: any) => (
              <MenuItemComponent key={item.id} item={item} />
            ))}
          </ul>
        </nav>
  );
}
