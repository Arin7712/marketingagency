import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-yellow-100 py-10  px-6 md:px-0 md:mx-auto border-t">
      <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
        <h1 className="text-3xl md:text-5xl font-medium ">
        <Image
              src={"/momedia1.jpg"}
              width={10000}
              height={10000}
              className="w-40 rounded-sm"
              alt="image"
            />{" "}
        </h1>
        <a href="mailto:"><FontAwesomeIcon icon={faEnvelope} style={{ color: '#000' , fontSize: '20px'}} /> Mo@growwith-mo.com</a>
        <a href="https://www.instagram.com/grow.with_mo"><FontAwesomeIcon icon={faInstagram} style={{ color: '#000' , fontSize: '20px'}} /> grow.with_mo</a>
      </div>

      <div className="flex md:justify-center gap-x-4 mt-10">
        © 2024 Bird. All Rights Reserved.
        <Link href="/" className="text-yellow-200">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;