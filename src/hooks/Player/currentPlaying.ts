import { api } from '../../services/api';

export async function useCurrentlyPlaying(accessToken: string) {
  try {
    const response = await api.get<any>('me/player/currently-playing', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
