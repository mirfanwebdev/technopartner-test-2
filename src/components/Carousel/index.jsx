import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BannerItem from "../BannerItem";
import { useSelector } from "react-redux";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function CustomCarousel(props) {
  const { isLoading, data } = useSelector((state) => state.profile);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="relative pb-8">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        renderDotsOutside={true}
        responsive={responsive}
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* <BannerItem /> */}
        {data.banner?.map((item, index) => {
          return (
            <div key={index}>
              <img src={item} alt="banner" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
