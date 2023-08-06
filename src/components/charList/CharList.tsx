import './charList.scss';
import { FC, useCallback, useEffect, useState } from 'react';
import ErrorMessage from '../../ui/components/errorMessage/errorMessage';
import Spinner from '../../ui/components/spinner/spinner';
import { ICharacter, IResponse } from '../../interfaces/character-data.interface';
import { MarvelService } from '../../services/marvel-service';

const CharList: FC<{ handleClick: (data: ICharacter) => void }> = ({ handleClick }) => {
  const [data, setData] = useState<IResponse | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [baseLimit, setBaseLimit] = useState<number>(9);

  const onButtonClick = () => {
    setBaseLimit((prev) => prev + 9);
  };

  const updateData = useCallback(() => {
    const service = new MarvelService();
    window.scrollTo({ behavior: 'smooth', left: 0, top: 0 });
    setLoading(true);

    service
      .getCharactersByOffsetAndLimit(1, baseLimit)
      .then((responseData) => setData(responseData))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [baseLimit]);

  useEffect(() => {
    updateData();
  }, [baseLimit, updateData]);

  const errorComponent = isError ? <ErrorMessage message="помилка" /> : null;
  const loadingComponent = isLoading ? <Spinner /> : null;

  return (
    <div className="char__list">
      {errorComponent}
      {loadingComponent}

      <ul className="char__grid">
        {data?.data?.results.map((character: ICharacter) => {
          return !(errorComponent || loadingComponent) ? (
            <View key={character.id} data={character} handleClick={handleClick} />
          ) : null;
        })}
      </ul>
      {
        !isLoading ?
        <button className="button button__main button__long" onClick={onButtonClick}>
          <div className="inner">load more</div>
        </button> : null
      }
    </div>
  );
};

const View: FC<{ data: ICharacter; handleClick: (data: ICharacter) => void }> = ({ data, handleClick }) => {
  const imgPath = `${data.thumbnail.path}.${data.thumbnail.extension}`;

  return (
    <>
      <li className="char__item" onClick={() => handleClick(data)}>
        <img src={imgPath} alt="abyss" />
        <div className="char__name">{data.name}</div>
      </li>
    </>
  );
};

export default CharList;
