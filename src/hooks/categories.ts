import { api } from '../services/api';

export async function useCategories(accessToken: string) {
  try {
    const response = await api.get<any>(
      'browse/categories?country=BR&locale=pt_BR',
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
