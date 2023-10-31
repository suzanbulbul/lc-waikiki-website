import axios from 'axios';

export async function getNavigation(title) {
  try {
    const response = await axios.get(`https://simple-one-8tzu.onrender.com/api/navigation/render/${title}?type=TREE`);
    return response.data;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
}



