import { GeocodingResponse } from '@/types/GeocodingResponse';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<GeocodingResponse>) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Bad Request' });
  }

  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${process.env.OPENWEATHER_API_KEY}`
  );

  const data = await response.json();

  if (!response.ok) {
    return res.status(response.status).json({ error: data });
  }

  if (data.length === 0) {
    return res.status(404).json({ error: 'Not Found' });
  }

  return res.status(200).json({
    data: {
      coords: {
        name: data[0].name,
        state: data[0].state,
        country: data[0].country,
        latitude: data[0].lat,
        longitude: data[0].lon
      }
    }
  });
}
