// components/Movie.tsx
import React from 'react';

interface MovieProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const Movie: React.FC<MovieProps> = ({ Title, Year, imdbID, Type, Poster }) => (
  <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <img className="w-full h-56 object-cover" src={Poster} alt={Title} />
    <div className="p-4">
      <h1 className="text-gray-900 font-bold text-2xl">{Title}</h1>
      <p className="text-gray-600 mt-2">{Year}</p>
      <p className="text-gray-600 mt-2">{Type}</p>
    </div>
  </div>
);

export default Movie;
