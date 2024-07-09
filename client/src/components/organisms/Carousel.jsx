import { image1, image2, image3 } from "../../assets";

const Carousel = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="carousel carousel-center rounded-box max-w-[350px] max-h-[180px] space-x-2">
        <div id="item1" className="carousel-item max-w-xs">
          <img src={image1} className="w-full object-cover rounded-lg" />
        </div>
        <div id="item2" className="carousel-item max-w-xs">
          <img src={image2} className="w-full object-cover rounded-lg" />
        </div>
        <div id="item3" className="carousel-item max-w-xs">
          <img src={image3} className="w-full object-cover rounded-lg" />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="rounded-full size-2 bg-darkGreen hover:bg-black"></a>
        <a href="#item2" className="rounded-full size-2 bg-darkGreen hover:bg-black"></a>
        <a href="#item3" className="rounded-full size-2 bg-darkGreen hover:bg-black"></a>
      </div>
    </div>
  );
};

export default Carousel;
