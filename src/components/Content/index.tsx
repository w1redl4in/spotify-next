import { IItem } from '../../types/featuredPlaylists';
import { ContentContainer, Playlists } from './styles';

type ContentProps = {
  message: string;
  playlists: {
    items: IItem[];
  };
};

export const Content: React.FC<ContentProps> = ({ message, playlists }) => {
  return (
    <ContentContainer>
      <h1>{message}</h1>
      <Playlists>
        {playlists.items.map((item) => (
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
