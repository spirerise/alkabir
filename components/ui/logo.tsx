import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  linkToHome?: boolean;
}

export function Logo({ 
  className = "", 
  width = 150, 
  height = 45,
  linkToHome = true 
}: LogoProps) {
  const logoImage = (
    <Image
      src="/logo.svg"
      alt="Al Kabir Rentals"
      width={width}
      height={height}
      className={className}
      priority
    />
  );

  if (linkToHome) {
    return (
      <Link href="/" className="flex items-center">
        {logoImage}
      </Link>
    );
  }

  return logoImage;
}
