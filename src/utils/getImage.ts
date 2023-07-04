import api from '../services/api';

export const getImage = async (caminho: string) => {
  const response = await api.get(`/media/${caminho}`, {
    responseType: 'blob',
  });
  return URL.createObjectURL(response.data);
};
