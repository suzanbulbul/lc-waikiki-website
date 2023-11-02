import axios from 'axios';

export async function getNavigation() {
  try {
    const response = await axios.get(`https://simple-one-8tzu.onrender.com/api/navigation/render/header?type=TREE`);
    return response.data;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
}



