import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';
import { useState } from "react";
import { ICharacter } from "../../interfaces/character-data.interface";

const App = () => {
    const [selectedCharacter, setSelectedCharacter] = useState<ICharacter | null>(null);

    const handleCharacterSelect = (data: ICharacter) => {
        if (data) {
            setSelectedCharacter(data);
        }
    }

    return (
        <div className="app">
            <AppHeader/>
            <main>
                <RandomChar/>
                <div className="char__content">
                    <CharList handleClick={handleCharacterSelect}/>
                    <CharInfo character={selectedCharacter}/>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
}

export default App;
