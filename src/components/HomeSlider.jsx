import { useState, useEffect } from "react";
import colorful_laptop from "../img/colorful_laptop.jpg";
import Apple_leader from "../img/Apple_leader_phone.jpeg";
import apple_watch from "../img/apple_watch.jpeg";
import electro_products from "../img/electro_products.jpeg";

const HomeSlider = () => {
  const [currentImage, setCurrentImage] = useState([
    {id:1,
      src: "https://res.cloudinary.com/daqa87dud/image/upload/v1712241651/pubImage/electro_products_hk7cyi.jpg",
    },
    {id:2,
      src: "https://res.cloudinary.com/daqa87dud/image/upload/v1712241635/pubImage/Apple_leader_phone_wigp6f.jpg",
    },
    {id:3,
      src: "https://res.cloudinary.com/daqa87dud/image/upload/v1712241676/pubImage/colorful_laptop_tg8la8.jpg",
    },
    {id:4,
      src: "https://res.cloudinary.com/daqa87dud/image/upload/v1712241642/pubImage/apple_watch_i0i0rw.jpg",
    },
  ]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = currentImage.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, currentImage]);

   // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
   useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="home-slider">
      <section className="shopping-slider">
        { currentImage.map((img, imgIndex) => {
        const { id, src } = img;

        let position = "nextSlide";
          if (imgIndex === index) {
            position = "activeSlide";
          }
          if (
            imgIndex === index - 1 ||
            (index === 0 && imgIndex === currentImage.length - 1)
          ) {
            position = "lastSlide";
          }

          <img key={img.id} src={img.src} alt="" />
        }) }
      </section>
    </div>
  );
  console.log(currentImage)
};

export default HomeSlider;
