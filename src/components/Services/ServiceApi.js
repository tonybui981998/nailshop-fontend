import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

// get menu
const getMenu = async () => {
  const apiMenu = import.meta.env.VITE_API_MENU;
  try {
    const respond = await axios.get(`${apiKey}${apiMenu}`);
    console.log(respond.data);
    return respond.data;
  } catch (e) {
    console.log(e);
  }
};
export { getMenu };
