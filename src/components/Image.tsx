"use client";
import { IKImage } from "imagekitio-next";

type ImageType = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  transform?:boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Image = ({ path, w, h, alt, className ,transform}: ImageType) => {
    return (
        <IKImage
            urlEndpoint={urlEndpoint}
            path={path}
            alt={alt}
            {...transform?{transformation:[{width:`${w}`, height:`${h}`}] }:{width:w ,height:h}}
            className={className}
        />
    );
};

export default Image;
