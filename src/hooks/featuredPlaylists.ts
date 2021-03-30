import { IFeaturedPlaylists } from '../@types/featuredPlaylists';
import { api } from '../services/api';

export async function useFeaturedPlaylists(accessToken: string | undefined) {
  try {
    const response = await api.get<IFeaturedPlaylists>(
      'browse/featured-playlists?country=BR&locale=pt_BR',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
