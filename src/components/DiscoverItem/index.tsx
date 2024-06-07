import Image from "next/image";
import srcDefault from "../../../public/images/home/action/action.svg";
export const DiscoverItem = () => {
  return (
    <article className=" aspect-[350/534] bg-[#242932]">
      <picture className=" flex aspect-square overflow-hidden">
        <Image
          className=" w-full h-full object-cover"
          src={srcDefault}
          alt="Discover "
        ></Image>
      </picture>
      <div className="">
        <div>
          <div>
            <p>Polychain Monsters</p>
            <h3>Neo Unigiraffe</h3>
          </div>
          <div>
            <h5>Price</h5>
            <p>0.5BUSD</p>
          </div>
        </div>
      </div>
    </article>
  );
};
