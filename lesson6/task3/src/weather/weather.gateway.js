const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const fetchWeatherData = async () => {
  const response = await fetch(baseUrl);
  if (response.ok) {
    return response.json();
  }
  throw new Error();
};