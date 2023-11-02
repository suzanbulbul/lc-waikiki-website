import axios from 'axios';

export async function getFooter() {
  try {
    const response = await axios.get(
      "https://simple-one-8tzu.onrender.com/api/footer?populate=*,benefitsArea,benefitsArea.img,mobileApp,mobileApp.img,logo,telNumber,disability,socialmedia,socialmediaImg"
    );
    return response.data.data.attributes;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
}

export async function getNavigation() {
  try {
    const response = await axios.get(`https://simple-one-8tzu.onrender.com/api/navigation/render/footer?type=TREE`);
    return response.data;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
}
