import Image from 'next/image';

export default function WeatherIcon({ code }: { code: string }) {
  return <Image src={`https://openweathermap.org/img/wn/${code}@2x.png`} alt='Weather Icon' width='50' height='50' />;
}
