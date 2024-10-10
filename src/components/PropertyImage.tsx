import Image from "next/image";

interface PropertyImageProps {
  src: string;        // The source URL of the image
  alt: string;        // Alt text for the image
  width?: number;     // Optional width of the image
  height?: number;    // Optional height of the image
  fill?: boolean;     // Optional boolean to decide if the image should fill its container
  className?: string; // Optional class name for styling
}

export default function PropertyImage({
  src,
  alt,
  width,
  height,
  fill = false,  
  className = "object-cover",  
}: PropertyImageProps) {
  const placeholderImage = "/images/default-property.jpeg";

  return fill ? (
    <Image
      src={src || placeholderImage}
      alt={alt}
      fill
      className={className}
      sizes="100vw"  
    />
  ) : (
    <Image
      src={src || placeholderImage}
      alt={alt}
      width={width || 400} 
      height={height || 300}  
      className={className}
    />
  );
}
