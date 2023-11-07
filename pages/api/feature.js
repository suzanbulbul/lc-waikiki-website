import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const apiBaseUrl = publicRuntimeConfig.apiBaseUrl;

export async function fetchData() {
  try {
    const response = await axios.get(
      `${apiBaseUrl}/products?populate=*,feature,feature.size,color.image,jsonData`
    );
    return response.data.data;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
}
