import { useSession } from 'next-auth/client';
import { useCallback, useEffect, useState } from 'react';
import { IFeaturedPlaylists } from '../../@types/featuredPlaylists';
import { api } from '../../services/api';
import { ContentContainer, Playlists } from './styles';

export const Content: React.FC = () => {
  const [session] = useSession();

  const [
    featuredPlaylists,
    setFeaturedPlaylists,
  ] = useState<IFeaturedPlaylists>();

  const handleFeaturedPlaylists = useCallback(async () => {
    try {
      const response = await api.get('browse/featured-playlists', {
        headers: {
          Authorization: session?.accessToken,
        },
      });
      setFeaturedPlaylists(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    handleFeaturedPlaylists();
  }, []);

  return (
    <ContentContainer>
      <h1>{featuredPlaylists?.message}</h1>
      <Playlists>
        {featuredPlaylists?.playlists?.items.map((item) => (
          <div>
            <img src={item.images[0].url} alt="images" />
            <h2>{item.name}</h2>
            <p>{item.owner.display_name}</p>
          </div>
        ))}
      </Playlists>
    </ContentContainer>
  );
};
