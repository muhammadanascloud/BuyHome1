import Image from "next/image";

interface PropertyImageProps {
  src: string;        
  alt: string;        
  width?: number;      
  height?: number;    
  fill?: boolean;     
  className?: string; 
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
