import { useSession } from 'next-auth/client';
import { useCallback, useEffect, useState } from 'react';
import { IFeaturedPlaylists } from '../../@types/featuredPlaylists';
import { useFeaturedPlaylists } from '../../hooks/featuredPlaylists';
import { useCategories } from '../../hooks/categories';
import { ContentContainer, ItemsWrapper, Category, PlayIcon } from './styles';
import { ICategories } from '../../@types/categories';

export const Content: React.FC = () => {
  const [session] = useSession();

  const [isHover, setIsHover] = useState('');

  const handleHover = useCallback((name: string) => {
    setIsHover(name);
  }, []);

  const [
    featuredPlaylists,
    setFeaturedPlaylists,
  ] = useState<IFeaturedPlaylists>();

  const [categories, setCategories] = useState<ICategories>();

  const callFeaturedPlaylists = async () => {
    session?.user &&
      setFeaturedPlaylists(
        await useFeaturedPlaylists(session.user.accessToken as string)
      );
  };

  const callCategories = async () => {
    session?.user &&
      setCategories(await useCategories(session.user.accessToken as string));
  };

  useEffect(() => {
    callFeaturedPlaylists();
    callCategories();
  }, [session]);

  return (
    <ContentContainer>
      <>
        {session ? (
          <>
            <h1>{featuredPlaylists?.message}</h1>
            <ItemsWrapper>
              {featuredPlaylists?.playlists?.items.map((item) => (
                <div
                  onMouseEnter={() => handleHover(item.name)}
                  onMouseLeave={() => handleHover('')}
                >
                  {isHover === item.name && <PlayIcon />}
                  <img src={item.images[0].url} alt="images" />
                  <h2>{item.name}</h2>
                  <p>{item.owner.display_name}</p>
                </div>
              ))}
            </ItemsWrapper>
            {categories && <h1>Categorias</h1>}
            <ItemsWrapper>
              {categories?.categories.items.map((item) => (
                <Category>
                  <h2>{item?.name}</h2>
                </Category>
              ))}
            </ItemsWrapper>
          </>
        ) : (
          <>
            <h1>Faça login para iniciar - Work in Progress</h1>
          </>
        )}
      </>
    </ContentContainer>
  );
};
