import "./charInfo.scss";
import { ICharacter } from "../../interfaces/character-data.interface";
import { FC } from "react";
import ImageCard from "../../ui/components/imageCard/imageCard";
import Skeleton from "../skeleton/Skeleton";

export const CharInfo: FC<{ character: ICharacter | null }> = ({character}) => {
    const imgPath = `${character?.thumbnail.path}.${character?.thumbnail.extension}`;

  return (
    <div className="char__info">
      {!character ? <Skeleton /> : (
        <>
          <div className="char__basics">
            <ImageCard src={imgPath} />

            <div>
              <div className="char__info-name">{character.name}</div>
              <div className="char__btns">
                <a href="#" className="button button__main">
                  <div className="inner">homepage</div>
                </a>
                <a href="#" className="button button__secondary">
                  <div className="inner">Wiki</div>
                </a>
              </div>
            </div>
          </div>
          <div className="char__descr">{character.description}</div>
          <div className="char__comics">Comics:</div>
          <ul className="char__comics-list">
            {character?.comics?.items.map((item) => (
              <li key={item.resourceURI} className="char__comics-item">
                {item.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CharInfo;
