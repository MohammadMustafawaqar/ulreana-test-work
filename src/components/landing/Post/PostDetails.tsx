'use client';

import { PostHeaderProps } from '@/lib/types/types';
import React from 'react';
import BodyRenderer from '../../BodyRenderer';
import Image from 'next/image';


export default function PostDetails({
  title,
  heroImageUrl,
  author,
  formattedDate,
  category,
  body,
}: PostHeaderProps) {
  return (
    <header className="mb-12">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
        {title}
      </h1>

      {heroImageUrl && (
        <div className="mb-8">
          <Image
            src={heroImageUrl}
            alt={title}
            width={500}
            height={500}
            className="w-full rounded-lg shadow-lg object-cover max-h-96 mx-auto"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          {author.avatarUrl && (
            <Image
              height={50}
              width={50}
              src={author.avatarUrl}
              alt={author.name}
              className="w-12 h-12 rounded-full object-cover border border-gray-300 dark:border-gray-700"
              loading="lazy"
            />
          )}
          <div>
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              {author.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {formattedDate}
            </p>
          </div>
        </div>

        <span className="inline-block bg-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm select-none">
          {category}
        </span>
      </div>

      {body && (
        <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
          <BodyRenderer body={body} />

        </div>
      )}
    </header>
  );
}
