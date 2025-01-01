import React from "react";

interface NFTCollection {
  image: string;
  name: string;
  description: string;
  link?: string; // Optional link for each card
}

const NFTHorizontalBar = ({ collections }: { collections: NFTCollection[] }) => {
  return (
    <div className="py-8">
      {/* Title */}
      <h2 className="text-center text-white font-bold text-2xl mb-4">
        Must Meet 1 Condition to Qualify
      </h2>

      {/* Horizontal Bar */}
      <div className="flex justify-center items-center space-x-4">
        {collections.map((collection, index) => (
          <a
            key={index}
            href={collection.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={collection.image}
              alt={collection.name}
              className="w-12 h-12 mb-2 rounded-full"
              style={{ width: "50px", height: "50px" }}
            />
            <span className="text-white font-bold text-sm">{collection.name}</span>
            <p className="text-gray-400 text-xs mt-1">{collection.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NFTHorizontalBar;
