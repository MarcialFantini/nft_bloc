import Image, { StaticImageData } from "next/image";

export const ItemCollection = ({
  id,
  srcImage,
  title,
  price,
}: {
  price: number;
  id: number;
  title: string;
  srcImage: string | StaticImageData;
}) => {
  return (
    <article className=" flex flex-row items-center gap-4 transition-all hover:bg-[#111318] p-4 rounded-lg cursor-pointer">
      <p className="font-bold">{id}</p>
      <picture>
        <Image src={srcImage} alt=""></Image>
      </picture>
      <div>
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </article>
  );
};
