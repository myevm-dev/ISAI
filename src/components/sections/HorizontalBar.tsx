import React from "react";

interface NFTCollection {
  image: string;
  name: string;
  description: string;
  link?: string; // Optional link for each card
}

const NFTHorizontalBar = ({ collections }: { collections: NFTCollection[] }) => {
  return (
    <div className="py-6">
      {/* Title */}
      <h2 className="text-center text-white font-bold text-2xl mb-4 mt-5">
        Must Meet 1 Condition to Qualify
      </h2>

      {/* Horizontal Bar */}
      <div className="flex justify-center items-center space-x-5">
        {collections.map((collection, index) => (
          <a
            key={index}
            href={collection.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center bg-gray-800 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={collection.image}
              alt={collection.name}
              className="w-12 h-12 mb-1 rounded-full"
              style={{ width: "60px", height: "60px" }}
            />
            <span className="text-white font-bold text-sm">{collection.name}</span>
            <p className="text-gray-400 text-xs mt-1 mb-1">{collection.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NFTHorizontalBar;
