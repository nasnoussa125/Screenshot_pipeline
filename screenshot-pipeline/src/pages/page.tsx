'use client';
import { useSearchParams } from 'next/navigation';

export default function ResultPage() {
    const searchParams = useSearchParams();
    const imageUrl = searchParams.get('image');
    if(!imageUrl) throw new Error("No image url found.");
    return (
        <div>
            <h1>Resultat</h1>
            <img src={imageUrl} alt="Screenshot" />
        </div>
    );
}