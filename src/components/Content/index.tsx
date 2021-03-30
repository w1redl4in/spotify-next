import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import { IFeaturedPlaylists } from '../../@types/featuredPlaylists';
import { useFeaturedPlaylists } from '../../hooks/featuredPlaylists';
import { useCategories } from '../../hooks/categories';
import { ContentContainer, Playlists, Category } from './styles';
import { ICategories } from '../../@types/categories';

export const Content: React.FC = () => {
  const [session] = useSession();

  const [
    featuredPlaylists,
    setFeaturedPlaylists,
  ] = useState<IFeaturedPlaylists>();

  const [categories, setCategories] = useState<ICategories>();

  const callFeaturedPlaylists = async () => {
    setFeaturedPlaylists(
      await useFeaturedPlaylists(session?.user.accessToken as string)
    );
  };

  const callCategories = async () => {
    setCategories(await useCategories(session?.user.accessToken as string));
  };

  useEffect(() => {
    callFeaturedPlaylists();
    callCategories();
  }, []);

  return (
    <ContentContainer>
      <>
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
        {categories && <h1>Categorias</h1>}
        <Playlists>
          {categories?.categories.items.map((item) => (
            <Category>
              <h2>{item?.name}</h2>
            </Category>
          ))}
        </Playlists>
      </>
    </ContentContainer>
  );
};
