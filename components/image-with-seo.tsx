import Image from "next/image"

interface ImageWithSeoProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export default function ImageWithSeo({ src, alt, width, height, className, priority = false }: ImageWithSeoProps) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
    />
  )
}
