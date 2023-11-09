import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const apiBaseUrl = publicRuntimeConfig.apiBaseUrl;

export async function getSkirts() {
  try {
    const response = await axios.get(
      `${apiBaseUrl}/skirt?populate=*,attribute,attribute.features,color,color.image,color.size`
    );
    return response.data.data;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
}

export async function getSkirtseById(id) {
  try {
    const response = await axios.get(
        `${apiBaseUrl}/skirt/${id}?populate=*,attribute,attribute.features,color,color.image,color.size`
    );
    return response.data.data.attributes;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
}
