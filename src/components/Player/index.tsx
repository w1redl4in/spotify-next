import {
  PlayerContainer,
  MusicInfo,
  ArtistAndName,
  Icons,
  SoundInfo,
} from './styles';
import { AiOutlineHeart, AiOutlineWallet } from 'react-icons/ai';
import {
  BsMic,
  BsListOl,
  BsMusicPlayer,
  BsVolumeUp,
  BsArrowCounterclockwise,
} from 'react-icons/bs';
import { RiArrowLeftRightFill } from 'react-icons/ri';
import { BiSkipPrevious, BiSkipNext, BiPlay } from 'react-icons/bi';

export const Player: React.FC = () => {
  return (
    <PlayerContainer>
      <MusicInfo>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81hMEx3kLqL._AC_SL1200_.jpg"
          alt=""
        />
        <ArtistAndName>
          <h1>BUTTERFLY EFFECT</h1>
          <p>Travis Scott</p>
        </ArtistAndName>
        <Icons>
          <AiOutlineHeart />
          <AiOutlineWallet />
        </Icons>
      </MusicInfo>
      <section>
        <div>
          <RiArrowLeftRightFill />
          <BiSkipPrevious />
          <BiPlay className="play" />
          <BiSkipNext />
          <BsArrowCounterclockwise />
        </div>
        <span>
          0:00
          <input type="range" id="vol" name="vol" min="0" max="50" />
          5:15
        </span>
      </section>
      <SoundInfo>
        <BsMic />
        <BsListOl />
        <BsMusicPlayer />
        <BsVolumeUp />
        <input type="range" id="vol" name="vol" min="0" max="50" />
      </SoundInfo>
    </PlayerContainer>
  );
};
