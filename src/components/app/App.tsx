import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';
import { useState } from "react";
import { ICharacter } from "../../interfaces/character-data.interface";

const App = () => {
    const [data, setData] = useState<ICharacter | null>(null);

    const handleClick = (data: ICharacter) => {
        if (data) {
            setData(data);
        }
    }

    return (
        <div className="app">
            <AppHeader/>
            <main>
                <RandomChar/>
                <div className="char__content">
                    <CharList handleClick={handleClick}/>
                    <CharInfo data={data}/>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
}

export default App;
