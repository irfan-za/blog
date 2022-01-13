import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg glass">
    <div className="absolute left-0 right-0 -top-14">
      <div className="w-20 h-20 relative mx-auto">
        <Image
          alt={author.name}
          layout="fill"
          objectFit="fill"
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-semibold">{author.name}</h3>
    <p className="text-white text-ls">{author.bio}</p>
  </div>
);

export default Author;
