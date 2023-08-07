import { useEffect, useState, FC } from 'react';
import { ITransformedCharacterInfo } from '../../interfaces/transformed-character-info.interface';
import './randomChar.scss';

import ErrorMessage from '../../ui/components/errorMessage/errorMessage';

import Spinner from '../../ui/components/spinner/spinner';
import mjolnir from '../../resources/img/mjolnir.png';
import ImageCard from '../../ui/components/imageCard/imageCard';
import useMarvelService from '../../services/marvel-service';

const RandomChar = () => {
    const [data, setData] = useState<ITransformedCharacterInfo | null>(null);
    const { loading, error, getCharacterById } = useMarvelService();

    useEffect(() => {
        updateData();
    }, [])
    
    const updateData = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

        getCharacterById(id)
            .then((data) => setData(data));
    }

    const errorComponent = error ? <ErrorMessage message="помилка" /> : null;
    const loadingComponent = loading ? <Spinner /> : null;
    const ViewComponent = !(errorComponent || loadingComponent) ? < View data={data} /> : null;

    return (
        <div className="randomchar">
            { errorComponent }
            { loadingComponent }
            { ViewComponent }
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main" onClick={updateData}>
                    <div className="inner">try it</div>
                </button>
                <img src={ mjolnir } alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
}

const View: FC<{data: ITransformedCharacterInfo | null}> = ({ data }) => {
    return (
        <>
            <div className="randomchar__block">
                <ImageCard src={data?.thumbnail ?? ''} />

                <div className="randomchar__info">
                    <p className="randomchar__name">{ data?.name }</p>
                    <p className="randomchar__descr">
                            { data?.description }
                        </p>
                        <div className="randomchar__btns">
                            <a href={data?.homepage} className="button button__main">
                                <div className="inner">Home page</div>
                            </a>
                            <a href={data?.wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default RandomChar;
