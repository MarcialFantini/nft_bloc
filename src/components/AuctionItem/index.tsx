import Image from "next/image";
import srcDefault from "../../../public/images/home/action/action.svg";
import srcDefaultCoin from "../../../public/images/home/bnbbinance.svg";
import srcImageBox from "../../../public/images/home/action/group-items.svg";

export const AuctionItem = () => {
  return (
    <article className="bg-[#111318] rounded-lg overflow-hidden">
      <picture>
        <Image src={srcDefault} alt="image of action"></Image>
      </picture>
      <div className="p-4 flex flex-col  ">
        <div className=" border-b-2 border-gray-700">
          <div className=" pb-2 flex flex-row justify-between">
            <h5 className=" text-[#637592] flex flex-row text-sm">
              Polychain Monsters
            </h5>
            <picture className=" justify-self-end">
              <Image src={srcDefaultCoin} alt="coin binance"></Image>
            </picture>
          </div>
          <div className="pb-4 flex flex-row justify-between">
            <h3 className="flex flex-row text-xl">Red car</h3>
            <div className="flex items-center">
              <p className=" text-sm">6</p>
              <picture className=" justify-self-end">
                <Image src={srcImageBox} alt="coin Image Box"></Image>
              </picture>
            </div>
          </div>
        </div>
        <div className=" pt-4 flex flex-col  ">
          <div className=" pb-2 flex flex-row justify-between">
            <h5 className="flex flex-row text-sm text-[#637592]">
              Current bid
            </h5>
            <h5 className="flex flex-row text-sm text-[#637592]">Ends in</h5>
          </div>
          <div className="pb-2 flex flex-row justify-between">
            <h3 className="flex flex-row text-xl">0.75 BUSD</h3>
            <div className="flex items-center">
              <h5 className="flex flex-row text-sm">01 : 29 : 35</h5>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
