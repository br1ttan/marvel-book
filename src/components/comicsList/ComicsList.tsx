import "./comicsList.scss";
import { FC, useCallback, useEffect, useState } from "react";
import { useMarvelComicsService } from "../../services/marvel-comics.service";
import { IComics } from "../../interfaces/comics-data.interface";
import ErrorMessage from "../../ui/components/errorMessage/errorMessage";
import { Link } from "react-router-dom";
import { AppRouteEnum } from "../../enums/appRoute.enum";

const ComicsList = () => {
  const [comicsList, setComicsList] = useState<IComics[]>([]);
  const { loading, error, errorMessageHttp, getComicsByOffsetAndLimit } = useMarvelComicsService();
  const [baseLimit, setBaseLimit] = useState(20);

  const updateData = useCallback(() => {
    getComicsByOffsetAndLimit(0, baseLimit).then(setComicsList);
  }, [baseLimit]);

  const onButtonClick = () => {
    setBaseLimit((prev) => prev + 10);
  };

  useEffect(() => {
    updateData();
  }, [baseLimit]);

  return (
    <div className="comics__list">
      <ul className="comics__grid">
        {error ? <ErrorMessage message={errorMessageHttp} /> : (
          comicsList.map((comics) => <View key={comics.id} data={comics} />)
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

const View: FC<{ data: IComics }> = ({ data }) => {
  const imgPath = `${data.thumbnail.path}.${data.thumbnail.extension}`;

  return (
    <>
      <li className="comics__item">
        <Link to={`${AppRouteEnum.Comics}/${data.id}`}>
          <img src={imgPath} alt="ultimate war" className="comics__item-img" />
          <div className="comics__item-name">{data.title}</div>
          <div className="comics__item-price">{data.prices[0].price}$</div>
        </Link>
      </li>
    </>
  );
};

export default ComicsList;
