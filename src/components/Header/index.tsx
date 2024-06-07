import Image from "next/image";
import srcImg1 from "../../../public/images/home/header/01.svg";
import srcImg2 from "../../../public/images/home/header/02.svg";
import srcImg3 from "../../../public/images/home/header/03.svg";
import srcImg4 from "../../../public/images/home/header/04.svg";

const listSrcImg = [srcImg1, srcImg2, srcImg3, srcImg4];

export const HeaderHome = () => {
  return (
    <header>
      <div
        style={{ gridTemplateColumns: " repeat(auto-fit,minmax(200px,1fr))" }}
        className="grid w-full gap-5"
      >
        {listSrcImg.map((item, index) => {
          return (
            <picture className="" key={index}>
              <Image src={item} alt={`imagen header ${index} `}></Image>
            </picture>
          );
        })}
      </div>
    </header>
  );
};
