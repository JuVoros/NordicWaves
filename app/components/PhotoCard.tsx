interface PhotoCardProps {
src: string;
alt: string;
}


export default function PhotoCard({ src, alt }: PhotoCardProps) {
return (
<div className="overflow-hidden rounded-lg shadow-md">
<img src={src} alt={alt} className="w-full h-48 object-cover hover:scale-105 transition-transform" />
</div>
);
}