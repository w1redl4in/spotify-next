import { IFeaturedPlaylists } from '../@types/featuredPlaylists';
import { api } from '../services/api';

export async function useFeaturedPlaylists(accessToken: string | undefined) {
  const response = await api.get<IFeaturedPlaylists>(
    'browse/featured-playlists',
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
  return response.data;
}
