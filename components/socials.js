import Github from "../public/icons/github.svg";
import Instagram from "../public/icons/instagram.svg";
import Linkedin from "../public/icons/linkedin.svg";
import Spotify from "../public/icons/spotify.svg";

export default function Socials() {
  return (
    <>
      <a
        className="block"
        href="https://github.com/gabegrieve"
        target={"_blank"}
      >
        <figure className="svg-control w-4 lg:w-6 mx-2 hover:text-light-blue">
          <Github />
        </figure>
      </a>
      <a
        className="block"
        href="https://www.instagram.com/gabetwo/"
        target={"_blank"}
      >
        <figure className="svg-control w-4 lg:w-6 mx-2 hover:text-light-blue">
          <Instagram />
        </figure>
      </a>
      <a
        className="block"
        href="https://au.linkedin.com/in/gabrielgrieve/"
        target={"_blank"}
      >
        <figure className="svg-control w-4 lg:w-6 mx-2 hover:text-light-blue">
          <Linkedin />
        </figure>
      </a>
      <a
        className="block"
        href="https://open.spotify.com/artist/2d56ZBA8be33VkAUUz4hH6?si=DJVlD-MVTT2xIVQpMjeulQ"
        target={"_blank"}
      >
        <figure className="svg-control w-4 lg:w-6 mx-2 hover:text-light-blue">
          <Spotify />
        </figure>
      </a>
    </>
  );
}
