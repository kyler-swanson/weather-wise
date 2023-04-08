import { WeatherResponse } from '@/types/WeatherResponse';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<WeatherResponse>) {
  const { lat, lon, units } = req.query;

  if (!lat || !lon || !units) {
    return res.status(400).json({ error: 'Bad Request' });
  }

  const response = await fetch(
    `${process.env.OPENWEATHER_API}/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely,hourly,alerts&appid=${process.env.OPENWEATHER_API_KEY}`
  );

  const data = await response.json();

  if (!response.ok) {
    return res.status(response.status).json({ error: data });
  }

  if (data.length === 0) {
    return res.status(404).json({ error: 'Not Found' });
  }

  return res.status(200).json({ data });
}
