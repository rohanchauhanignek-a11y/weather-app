export const getCitySuggestions = async (query: string) => {
  if (!query.trim()) return [];

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${query}&featuretype=city&format=json&limit=10`,
    {
      headers: {
        "Accept": "application/json",
      },
    }
  );

  const data = await response.json();

  return data.map((item: any) => ({
    name: item.display_name.split(",")[0],
    displayName: item.display_name,
    lat: item.lat,
    lon: item.lon,
  }));
};