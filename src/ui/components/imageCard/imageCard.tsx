import { FC } from "react";

const ImageCard: FC<{ src: string }> = ({ src }) => {
  const notAvailableImageSrc = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';

  return (
    src.trim() === notAvailableImageSrc ? 
    <img 
        src={src} 
        style={{objectFit: 'contain'}} 
        alt="Random character" 
        className="randomchar__img"/> :
        
        <img 
        src={src} 
        style={{objectFit: 'cover'}} 
        alt="Random character" 
        className="randomchar__img"/> 
  );
};

export default ImageCard;
