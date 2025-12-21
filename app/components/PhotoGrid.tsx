import PhotoCard from "./PhotoCard";


export default function PhotoGrid() {
const photos = [
"/photos/sports1.jpg",
"/photos/sports2.jpg",
"/photos/sports3.jpg",
];


return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{photos.map((src, i) => (
<PhotoCard key={i} src={src} alt={`Charity Photo ${i + 1}`} />
))}
</div>
);
}