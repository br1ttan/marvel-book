import "./singleComic.scss";
import { Link, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { IComics } from "../../interfaces/comics-data.interface";
import { useMarvelComicsService } from "../../services/marvel-comics.service";
import ErrorMessage from "../../ui/components/errorMessage/errorMessage";
import Spinner from "../../ui/components/spinner/spinner";
import { AppRouteEnum } from "../../enums/appRoute.enum";

const SingleComic = () => {
  const { comicId } = useParams();
  const [comicData, setComicData] = useState<IComics | null>(null);
  const { loading, error, getComicsById } = useMarvelComicsService();

  const updateData = useCallback(() => {
    getComicsById(+comicId!)
      .then((data) => setComicData(data!))
  }, [comicId]);

  useEffect(() => {
    updateData();
  }, [comicId]);

  const imgPath = `${comicData?.thumbnail.path}.${comicData?.thumbnail.extension}`;
  const errorComponent = error ? <ErrorMessage message="Помилка" /> : null;

  return (
    <>
    { errorComponent }

    {
      loading ? <Spinner /> : 
      <div className="single-comic">
      <img src={imgPath} alt="comic" className="single-comic__img" />
    
      <div className="single-comic__info">
        <h2 className="single-comic__name">{ comicData?.title }</h2>
        <p className="single-comic__descr">{ comicData?.description }</p>
        <p className="single-comic__descr">Page count: { comicData?.pageCount }</p>
        <p className="single-comic__descr">Language: en-us</p>
        <div className="single-comic__price">{ comicData?.prices[0].price }$</div>
      </div>
      <Link to={AppRouteEnum.Comics} className="single-comic__back">
        Back to all
      </Link>
    </div>
    }
    </>
  );
};

export default SingleComic;
