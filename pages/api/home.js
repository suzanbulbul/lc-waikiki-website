import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const apiBaseUrl = publicRuntimeConfig.apiBaseUrl;

export async function getHome() {
  try {
    const response = await axios.get(
      `${apiBaseUrl}/home?populate=*,marketplace1,marketplace1.img,marketplace2,marketplace2.img,banner,banner.img`
    );
    return response.data.data.attributes;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
}
