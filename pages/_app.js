import '../styles/global.css';
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function App({ Component, pageProps }) {
  SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
  return <Component {...pageProps} />;
}
