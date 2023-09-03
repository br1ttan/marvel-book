import { useState } from 'react';
import { ICharacter } from '../../interfaces/character-data.interface';
import CharList from '../../components/charList/CharList';
import RandomChar from '../../components/randomChar/RandomChar';
import CharInfo from '../../components/charInfo/CharInfo';

import decoration from '../../resources/img/vision.png';

const HomePage = () => {
    const [selectedCharacter, setSelectedCharacter] = useState<ICharacter | null>(null);

    const handleCharacterSelect = (data: ICharacter) => {
        if (data) {
            setSelectedCharacter(data);
        }
    }
  
    return (
      <>
      <RandomChar />
        <div className="char__content">
            <CharList handleClick={handleCharacterSelect} />
            <CharInfo character={selectedCharacter} />
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
      </>
    );
}

export default HomePage;
