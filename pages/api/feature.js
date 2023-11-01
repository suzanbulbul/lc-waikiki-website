import axios from 'axios';

export async function fetchData() {
  try {
    const response = await axios.get(
      "https://simple-one-8tzu.onrender.com/api/products?populate=*,feature,feature.size,color.image"
    );
    return response.data.data;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
}
