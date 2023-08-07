import './charInfo.scss';
import thor from '../../resources/img/thor.jpeg';
import { ICharacter } from '../../interfaces/character-data.interface';
import { FC } from 'react';
import ImageCard from '../../ui/components/imageCard/imageCard';

export const CharInfo: FC<{ character: ICharacter | null }> = ({ character }) => {
    
    const staticCharacterData = {
        id: 0,
        name: 'Static Thor',
        description: 'This is static data for Thor. No description available.',
        modified: '',
        thumbnail: {
            path: thor,
            extension: 'jpeg',
        },
        comics: null,
        img: ''
    };
    
    const characterData = {...character, img: thor} || staticCharacterData;

    if (character) {
        characterData.img = `${character.thumbnail.path}.${character.thumbnail.extension}`;
    }

    return (
        <div className="char__info">
            <div className="char__basics">
                <ImageCard src={characterData.img} />
                
                <div>
                    <div className="char__info-name">{characterData.name}</div>
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
            <div className="char__descr">{characterData.description}</div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {characterData?.comics?.items.map((item) => (
                    <li key={item.resourceURI} className="char__comics-item">
                        { item.name }
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CharInfo;
