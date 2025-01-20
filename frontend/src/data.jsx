const fetchIndianGirlsData = async () => {
  try {
    const response = await fetch("http://localhost:3000/get");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getIndianGirls = async () => {
  const data = await fetchIndianGirlsData();
  return data;
};