"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from "@sanity/client";

// Initialize Sanity client
const client = createClient({
  projectId: "9khvxqrm", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset
  useCdn: true, // Use the CDN for faster response
  apiVersion: "2025-01-20", // Replace with your API version
});

// Define the TypeScript interface for an image item
interface ImageItem {
  _id: string;
  title: string; // Title or description of the image
  "imageUrl": string; // Image URL
}

export default function Images() {
  const [images, setImages] = useState<ImageItem[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const query = `*[_type == "products"]{
        _id,
        title,
        "imageUrl": image.asset->url
      }`;
      const data: ImageItem[] = await client.fetch(query);
      setImages(data);
    };

    fetchImages();
  }, []);

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <header className="container mx-auto px-4 py-12 lg:py-16">
      <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-x-1">
        {/* Rotated Vertical Text */}
        <div className="hidden md:flex items-center">
          <div className="w-8 flex justify-center">
            <div className="text-sm lg:text-lg font-medium tracking-wider text-zinc-900">
              <div className="writing-mode-vertical w-[648] h-[52] transform -rotate-90 whitespace-nowrap">
                EXPLORE NEW AND POPULAR STYLES
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden text-3xl font-medium w-[648] h-[52] tracking-wider text-zinc-900 mb-4">
          EXPLORE NEW AND POPULAR STYLES
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-4">
          {/* Left Large Image */}
          <div className="flex-grow md:w-[40%] lg:w-[40%]">
            {images[0] && (
              <Image
                src={images[0].imageUrl}
                alt={images[0].title}
                className="h-full w-full object-cover rounded-lg"
                width={648}
                height={648}
                priority
              />
            )}
          </div>

          {/* Right Side Grid of 4 Images */}
          <div className="grid grid-cols-2 gap-2 md:w-[50%] lg:w-[50%]">
            {images.slice(1, 5).map((image) => (
              <div key={image._id} className="relative aspect-square">
                <Image
                  src={image.imageUrl}
                  alt={image.title}
                  className="object-cover rounded-lg"
                  width={312}
                  height={312}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
