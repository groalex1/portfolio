import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';

const ProjectCard = ({ imgUrl, title, desc, gitURL, previewURL, tags }) => {
  return (
    <div className="group overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="h-52 md:h-64 relative overflow-hidden">
        <Image 
          src={imgUrl} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div className="flex gap-3">
            <Link href={gitURL} className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
              <CodeBracketIcon className="h-5 w-5 text-white" />
            </Link>
            <Link href={previewURL} className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
              <EyeIcon className="h-5 w-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{desc}</p>
        
        {tags && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              tag !== "All" && (
                <span 
                  key={index} 
                  className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                >
                  {tag}
                </span>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired, 
  gitURL: PropTypes.string.isRequired, 
  previewURL: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default ProjectCard;