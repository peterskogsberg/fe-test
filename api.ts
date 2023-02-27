import { StoreData } from './types';

const API_URL_BASE =
  'https://api.xxlsports.com/content-api-v5/datasets/xxl-se/stores';

const getAPIUrlForStoreId = (storeId: number): string =>
  `${API_URL_BASE}/${storeId}`;

const getDataForStore = async (storeId: number): Promise<StoreData> => {
  const url = getAPIUrlForStoreId(storeId);
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { getDataForStore };
