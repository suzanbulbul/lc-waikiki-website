import axios from 'axios';

export async function getHome() {
  try {
    const response = await axios.get(
      "https://simple-one-8tzu.onrender.com/api/home?populate=*,marketplace1,marketplace1.img,marketplace2,marketplace2.img,banner,banner.img"
    );
    return response.data.data.attributes;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
}
