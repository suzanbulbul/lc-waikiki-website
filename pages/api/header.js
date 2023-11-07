import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const apiBaseUrl = publicRuntimeConfig.apiBaseUrl;

export async function getNavigation() {
  try {
    const response = await axios.get(`${apiBaseUrl}/navigation/render/header?type=TREE`);
    return response.data;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
}



