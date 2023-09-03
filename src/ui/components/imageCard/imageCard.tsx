import { FC } from "react";

const isImageAviable = (src: string) => {
  const notAvailableImageSrc = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
  
  return src.trim() === notAvailableImageSrc;
}

const ImageCard: FC<{ src: string }> = ({ src }) => {
  return (
    <img 
      className="randomchar__img"
      alt="Random character" 
      src={src} 
      style={
      isImageAviable(src) ? 
      {objectFit: 'contain'} : {objectFit: 'contain'}} />
  );
};

export default ImageCard;
