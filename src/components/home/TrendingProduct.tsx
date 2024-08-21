import Container from "../layout/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "../ui/CustomArrowButton";
import { motion } from "framer-motion";
const TrendingProduct = () => {
  const products = [
    {
      id: 1,
      title: "Chanel",
      image:
        "https://s3-alpha-sig.figma.com/img/9e01/3a9a/20c0afef3e38571563390cd8bd001760?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E1juVJY89zejs69BBpJWbgG~lS1L0wYwAzEDdBe3ZZh~sH16llZfNPA0o7PmX9SY50pwKFkPAurxbSeYPg3Gh5YKXJPKttOpxy7kZGWqr-~T77qQKttCHzl8axOYUwP4dkgCLa9q78~sflVudNUr6-QlIKm45LT9gKvtMmcZU9UjuE9FEGYOEoOmY9lMXvrAjdoB1niMn5gkjr3op9Hnj57kc6I9mTBep9TcA-meSby69r95jw6UXB1VLm0Bvz7GLTgMupOVVVuM-z28JxjH6JjM9f3yR44B5FVV9KhQFrFchl3m9a1zQwu7vKU1yTQAuCSdjID-zV-crQFeibeufQ__",
    },
    {
      id: 2,
      title: "Louis Vuitton",
      image:
        "https://s3-alpha-sig.figma.com/img/f7c1/89d3/93ad496367cba2b6f6d1a8586316a1dd?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZAAO9Nklb-ZXoX52tR7wOHASRd6~RZk4oPXWhbz9~KNgwnvIhAVRMNKaLMLBy5s~1QvXmMqbLwgTMxqW60tLbaey6A-I0Fm0Jh7y-qvIjd1Yd52pmYom1iA1ieD~KParNyWK-AZkXOgzYR9GGyvGooMOKixOMPwIkj78pUn-viGOU~k013cS5zWEnPey83McW0NAbd2IzasY7b~GuOfiH-yqgHYgrqobr9wN2Vq4BL9xtUY2DGEmer0eWNT5YBWPHDzkUXdA59ckgrEeoMOZSmZhKdLN7piWB-j1fwZy4wm2PlnWwbj5gRaHwlVtDyu~4-tTTP6EJtzrJ3frUxVyOg__",
    },
    {
      id: 3,
      title: "Prada",
      image:
        "https://s3-alpha-sig.figma.com/img/adb5/3429/610804c88359317693a408bd8fc7cce1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dRoeutdMLns~~tVOdAbm3U8w7LUySq5GRSwUdrcnUZy8MWvxvf8MY8Kopk9WwU8GVi0T9Dfy0jhAs~rqdof58Axj~tNvo9xDSRnYk6aCW3cPErJ6gRxkPSRInbCKt923YYrrZI8YmsuHRuLbmquUjSisUaUic4ZXjYl2qERayR~xYhzuzyad-cl6OtWInwjpPX7u8HWUHMSWnhTQSJ7-rhHivpUg8BWPd7Qnx6pmek51u9PnzT2Nq4mDlk8-IN~zTycbrjOkwSL8UV2tOdEu6lvmb3B~pzKjdColml0UPXssQsCSGkMMUZualuzKciMYzCiwgY~7eRDgyPOv715b0A__",
    },
    {
      id: 4,
      title: "Hermes",
      image:
        "https://s3-alpha-sig.figma.com/img/b2ae/c055/00e0e8c1a299211a47d7bbde12760fab?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B8e5WLV2~ApWxtBN1M-Y-by~ghwb-o1lQUEqHpOwloK6kXNxwC4qYDHTG9rvS2rxF3sCxgPxU80PW~FdhubCcbDT8R13dUxTkw07tcRW8lE22XUi18N~V4uAQKkmYfltB8B4TTyCp9w0H2uzDtEdINBSuyrnYmEOKaDaF5FMJocJ-WpMeTiJCflQHMnPH0SI5hUccsuePZY3ELpjHn7aKh-IVgYgcS9n4Gd1lWMERmteCBrNTZn9tJhecEjVoW7cmJPLOHJ5nShQnxTS8Kr8UXv135I4hzNwfCVCeh~x-dM7AfaIhfk0eaBA5GW0Plc5LtduvrR1Ls~IK8-0j1gUKw__",
    },
    {
      id: 5,
      title: "Chanel",
      image:
        "https://s3-alpha-sig.figma.com/img/9e01/3a9a/20c0afef3e38571563390cd8bd001760?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E1juVJY89zejs69BBpJWbgG~lS1L0wYwAzEDdBe3ZZh~sH16llZfNPA0o7PmX9SY50pwKFkPAurxbSeYPg3Gh5YKXJPKttOpxy7kZGWqr-~T77qQKttCHzl8axOYUwP4dkgCLa9q78~sflVudNUr6-QlIKm45LT9gKvtMmcZU9UjuE9FEGYOEoOmY9lMXvrAjdoB1niMn5gkjr3op9Hnj57kc6I9mTBep9TcA-meSby69r95jw6UXB1VLm0Bvz7GLTgMupOVVVuM-z28JxjH6JjM9f3yR44B5FVV9KhQFrFchl3m9a1zQwu7vKU1yTQAuCSdjID-zV-crQFeibeufQ__",
    },
    {
      id: 6,
      title: "Louis Vuitton",
      image:
        "https://s3-alpha-sig.figma.com/img/f7c1/89d3/93ad496367cba2b6f6d1a8586316a1dd?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZAAO9Nklb-ZXoX52tR7wOHASRd6~RZk4oPXWhbz9~KNgwnvIhAVRMNKaLMLBy5s~1QvXmMqbLwgTMxqW60tLbaey6A-I0Fm0Jh7y-qvIjd1Yd52pmYom1iA1ieD~KParNyWK-AZkXOgzYR9GGyvGooMOKixOMPwIkj78pUn-viGOU~k013cS5zWEnPey83McW0NAbd2IzasY7b~GuOfiH-yqgHYgrqobr9wN2Vq4BL9xtUY2DGEmer0eWNT5YBWPHDzkUXdA59ckgrEeoMOZSmZhKdLN7piWB-j1fwZy4wm2PlnWwbj5gRaHwlVtDyu~4-tTTP6EJtzrJ3frUxVyOg__",
    },
    {
      id: 7,
      title: "Prada",
      image:
        "https://s3-alpha-sig.figma.com/img/adb5/3429/610804c88359317693a408bd8fc7cce1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dRoeutdMLns~~tVOdAbm3U8w7LUySq5GRSwUdrcnUZy8MWvxvf8MY8Kopk9WwU8GVi0T9Dfy0jhAs~rqdof58Axj~tNvo9xDSRnYk6aCW3cPErJ6gRxkPSRInbCKt923YYrrZI8YmsuHRuLbmquUjSisUaUic4ZXjYl2qERayR~xYhzuzyad-cl6OtWInwjpPX7u8HWUHMSWnhTQSJ7-rhHivpUg8BWPd7Qnx6pmek51u9PnzT2Nq4mDlk8-IN~zTycbrjOkwSL8UV2tOdEu6lvmb3B~pzKjdColml0UPXssQsCSGkMMUZualuzKciMYzCiwgY~7eRDgyPOv715b0A__",
    },
    {
      id: 8,
      title: "Hermes",
      image:
        "https://s3-alpha-sig.figma.com/img/b2ae/c055/00e0e8c1a299211a47d7bbde12760fab?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B8e5WLV2~ApWxtBN1M-Y-by~ghwb-o1lQUEqHpOwloK6kXNxwC4qYDHTG9rvS2rxF3sCxgPxU80PW~FdhubCcbDT8R13dUxTkw07tcRW8lE22XUi18N~V4uAQKkmYfltB8B4TTyCp9w0H2uzDtEdINBSuyrnYmEOKaDaF5FMJocJ-WpMeTiJCflQHMnPH0SI5hUccsuePZY3ELpjHn7aKh-IVgYgcS9n4Gd1lWMERmteCBrNTZn9tJhecEjVoW7cmJPLOHJ5nShQnxTS8Kr8UXv135I4hzNwfCVCeh~x-dM7AfaIhfk0eaBA5GW0Plc5LtduvrR1Ls~IK8-0j1gUKw__",
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    centerPadding: "60px",
    slidesToScroll: 4,

    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Container>
      <div className="mb-20">
        <motion.div className="flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
            className="text-2xl font-medium text-primary"
          >
            Trending Brands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
            className="underline"
          >
            View All
          </motion.p>
        </motion.div>

        <div className="my-6">
          <div className="slider-container">
            <Slider {...settings}>
              {products.map((product) => (
                <motion.div
                  initial={{
                    height: 0,
                    width: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    height: "100%",
                    width: "100%",
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.3 },
                  }}
                  key={product.id}
                >
                  <div className="mx-3 cursor-pointer overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="size-[272px] hover:scale-125 duration-500 object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TrendingProduct;
