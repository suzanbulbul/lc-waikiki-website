import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const apiBaseUrl = publicRuntimeConfig.apiBaseUrl;

export async function getFooter() {
  try {
    const response = await axios.get(
      `${apiBaseUrl}/footer?populate=*,benefitsArea,benefitsArea.img,mobileApp,mobileApp.img,logo,telNumber,disability,socialmedia,socialmediaImg`
    );
    return response.data.data.attributes;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
}

export async function getNavigation() {
  try {
    const response = await axios.get(`${apiBaseUrl}/navigation/render/footer?type=TREE`);
    return response.data;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
}
