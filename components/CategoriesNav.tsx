import React from "react";

const CategoriesNav = () => {
  return (
    <div className="">
      <nav className="container border-b mx-auto px-4 hero--nav pb-12 ">
        <ul className=" flex justify-center align-middle">
          <li>
            <a>Tops</a>
          </li>
          <li>
            <a className="hero-border-middle">Bottoms</a>
          </li>
          <li>
            <a>Sale</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CategoriesNav;
