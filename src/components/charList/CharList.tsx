import "./charList.scss";
import { FC, useCallback, useEffect, useState } from "react";
import ErrorMessage from "../../ui/components/errorMessage/errorMessage";
import { ICharacter } from "../../interfaces/character-data.interface";
import useMarvelCharactersService from "../../services/marvel-characters.service";

const CharList: FC<{ handleClick: (data: ICharacter) => void }> = ({
  handleClick
}) => {
  const [characterList, setCharacterList] = useState<ICharacter[]>([]);
  const [baseLimit, setBaseLimit] = useState<number>(9);
  const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(null);

  const { loading, error, getCharactersByOffsetAndLimit } =
    useMarvelCharactersService();

  const onCharacterClick = (character: ICharacter) => {
    setSelectedCharacterId(character.id);
    handleClick(character);
  };

  const onButtonClick = () => {
    setBaseLimit((prev) => prev + 9);
  };

  const updateData = useCallback(() => {
    getCharactersByOffsetAndLimit(0, baseLimit)
      .then((data) => setCharacterList(data))
      .catch(() => setCharacterList([]));
  }, [baseLimit]);

  useEffect(() => {
    updateData();
  }, [baseLimit]);

  return (
    <div className="char__list">
      <ul className="char__grid">
        {error ? (
          <ErrorMessage message="Помилка" />
        ) : (
          characterList?.map((character: ICharacter) => (
            <View
              key={character.id}
              data={character}
              isSelected={selectedCharacterId === character.id}
              handleClick={onCharacterClick}
            />
          ))
        )}
      </ul>
      <button
        className="button button__main button__long"
        disabled={loading}
        onClick={onButtonClick}>
        <div className="inner">{ loading ? '...' : 'load more' }</div>
      </button>
    </div>
  );
};

const View: FC<{
  data: ICharacter,
  isSelected: boolean,
  handleClick: (data: ICharacter) => void
}> = ({ data, isSelected, handleClick }) => {
  const imgPath = `${data.thumbnail.path}.${data.thumbnail.extension}`;

  return (
    <>
      <li
        className={`char__item ${ isSelected ? 'char__item_selected' : '' }`}
        onClick={() => handleClick(data)}>
        <img src={imgPath} alt="abyss" />
        <div className="char__name">{data.name}</div>
      </li>
    </>
  );
};

export default CharList;
