import { cx } from "@/utils";
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        `inline-block py-1.5  md:py-2 px-6 rounded-full border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 m-2 tag-${name} font-semibold`,
        props.className,
        active ? "!bg-dark !text-light dark:bg-light dark:!text-light" : ""
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
