import { api } from '../services/api';

export async function useCategories(accessToken: string | undefined) {
  const response = await api.get<any>(
    'browse/categories?country=BR&locale=pt_BR',
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
  return response.data;
}
