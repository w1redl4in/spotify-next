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
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
// import { useCurrentlyPlaying } from '../../hooks/Player/currentPlaying';
import { useRecentlyPlayed } from '../../hooks/Player/recentlyPlayed';
import { IRecentlyPlayed } from '../../@types/recentlyPlayed';

export const Player: React.FC = () => {
  const [session] = useSession();

  // const [currentlyPlaying, setCurrentlyPlaying] = useState();

  const [recentlyPlayed, setRecentlyPlayed] = useState<IRecentlyPlayed>();

  // const callCurrentlyPlaying = async () => {
  //   session?.user &&
  //     setCurrentlyPlaying(
  //       await useCurrentlyPlaying(session.user.accessToken as string)
  //     );
  // };

  const callrecentlyPlayed = async () => {
    session?.user &&
      setRecentlyPlayed(
        await useRecentlyPlayed(session.user.accessToken as string)
      );
  };

  useEffect(() => {
    // callCurrentlyPlaying();
    callrecentlyPlayed();
  }, [session]);

  return (
    <PlayerContainer>
      <MusicInfo>
        <img src={recentlyPlayed?.items[0].track.album.images[0].url} alt="" />
        <ArtistAndName>
          <h1>{recentlyPlayed?.items[0].track.name}</h1>
          <p>{recentlyPlayed?.items[0].track.artists[0].name}</p>
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
