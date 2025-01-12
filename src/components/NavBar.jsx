import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px]">
        {/* 왼 */}
        <div className="flex items-center">
          <img
            className="h-[36px] w-[100px] m-2"
            src={"/images/amazon.png"}
            alt="logo_img"
          />
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">
              Republic of Korea
            </div>
          </div>
        </div>
        {/* 중앙 */}
        <div className="flex">Middle</div>
        {/* 우 */}
        <div className="flex items-center">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, Sign in</div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Return</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
            <div className="flex pr-3 pl-3">
              <ShoppingCartIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
