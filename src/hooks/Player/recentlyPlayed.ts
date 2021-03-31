import { IRecentlyPlayed } from '../../@types/recentlyPlayed';
import { api } from '../../services/api';

export async function useRecentlyPlaying(accessToken: string) {
  try {
    const response = await api.get<IRecentlyPlayed>(
      'me/player/recently-played',
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
