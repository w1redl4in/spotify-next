import { GetStaticProps } from 'next';
import { Content } from '../components/Content';
import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { Sidebar } from '../components/Sidebar';
import { api } from '../services/api';
import { IFeaturedPlaylists } from '../types/featuredPlaylists';

export default function Home({ message, playlists }: IFeaturedPlaylists) {
  return (
    <>
      <Sidebar />
      <Header />
      <Content message={message} playlists={playlists} />
      <Player />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get(
    'browse/featured-playlists?country=BR&locale=pt_BR'
  );

  const { message, playlists } = response.data;

  return {
    props: {
      message,
      playlists,
    },
  };
};
