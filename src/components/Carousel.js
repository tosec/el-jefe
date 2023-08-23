import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "https://www.impactplus.com/hubfs/10-free-stock-photo-websites-that-dont-suck-featured.jpg",
    },
    {
      url: "https://www.nerdwallet.com/assets/blog/wp-content/uploads/2020/07/GettyImages-482534949.jpg",
    },
    {
      url: "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2019/11/02060940/Untitled-design-16.png",
    },
  ];

  const changeSlide = (offset) => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + offset + slides.length) % slides.length
    );
  };

  return (
    <div className="max-w-[1400px] h-[780px] mx-auto mt-16 py-16 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-lg"
      ></div>
      <div className="hidden group-hover:block  absolute top-[50%] translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
        <MdKeyboardArrowLeft onClick={() => changeSlide(-1)} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
        <MdKeyboardArrowRight onClick={() => changeSlide(+1)} size={30} />
      </div>
    </div>
  );
}
