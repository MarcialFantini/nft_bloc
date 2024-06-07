import Image from "next/image";
import srcMainIcon from "../../../public/images/home/Frameicond-main.svg";
import srcBritish from "../../../public/images/home/Button Iconbritish.svg";
import srcAlert from "../../../public/images/home/Button Iconalert.svg";
import srcBinance from "../../../public/images/home/bnbbinance.svg";

export const NavbarLayout = () => {
  return (
    <nav className=" w-full bg-[#111318] ">
      <div className=" max-w-[1200px] m-auto flex flex-row justify-between gap-2 py-4">
        <div className=" flex flex-row gap-6 items-center justify-around">
          <div className=" flex flex-row items-center  gap-2">
            <picture>
              <Image src={srcMainIcon} alt="main img"></Image>
            </picture>
            <h1>NFT-Bloc</h1>
          </div>
          <ul>
            <li>Marketplace</li>
          </ul>
          <ul>
            <li>Resources</li>
          </ul>
        </div>
        <div className="flex flex-row items-center justify-between">
          <form>
            <input
              className=" bg-[#191D24] py-2 px-4"
              type="text"
              placeholder="Collection, item or User"
            />
          </form>
          <div className="flex flex-row items-center justify-center gap-2 px-2">
            <picture>
              <Image src={srcBritish} alt="main British"></Image>
            </picture>
            <picture>
              <Image src={srcAlert} alt="main alert"></Image>
            </picture>
            <button className="flex flex-row bg-[#191D24] px-4 py-2 rounded">
              <picture>
                <Image src={srcBinance} alt="main British"></Image>
              </picture>
              BNB Chain
            </button>
            <button className=" bg-[#3D6EFF] px-4 py-2 rounded">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
