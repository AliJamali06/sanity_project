import React from "react";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-16 pt-14 px-4">
      <Image src="/Logo1.png" alt="Zaphier Logo" width={85} height={87} />
      <Image src="/Logo2.png" alt="Pipe Drive Logo" width={107} height={109} />
      <Image src="/Logo3.png" alt="Cib Bank Logo" width={135} height={139} />
      <Image src="/Logo4.png" alt="Company 4 Logo" width={63} height={65} />
      <Image src="/Logo5.png" alt="Burnt Toast Logo" width={98} height={101} />
      <Image src="/Logo6.png" alt="Panda Doc Logo" width={113} height={115} />
      <Image src="/Logo7.png" alt="Moz Logo" width={84} height={87} />
    </div>
  );
};

export default Categories;
