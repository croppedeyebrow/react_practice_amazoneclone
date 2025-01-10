import React from "react";

const NavBar = () => {
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px]">
        {/* 왼 */}
        <div className="flex">
          <img src={"/images/amazon.png"} alt="logo_img" />
          <div>
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">
              Republic of Korea
            </div>
          </div>
        </div>
        {/* 중앙 */}
        <div className="flex">Middle</div>
        {/* 우 */}
        <div className="flex">Right</div>
      </div>
    </header>
  );
};

export default NavBar;
