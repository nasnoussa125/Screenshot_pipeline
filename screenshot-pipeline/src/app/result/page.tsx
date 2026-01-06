'use client';

import { useSearchParams } from 'next/navigation';

export default function ResultPage() {
    const searchParams = useSearchParams();
    const imageUrl = searchParams.get('image');

    if (!imageUrl) {
        return (
            <main className="page-container">
                <h1 className="page-title">
                    Erreur : Aucune image trouvée
                </h1>
                <a href="/" className="btn btn-primary">
                    Retour à l'accueil
                </a>
            </main>
        );
    }

    return (
        <main className="page-container">
            <h1 className="page-title">
                Capture d'écran réussie ! 📸
            </h1>

            <div className="form-container">
                <img 
                    src={imageUrl} 
                    alt="Capture d'écran du site" 
                    className="screenshot-image"
                />
            </div>

            <div>
                <a href="/" className="btn btn-primary">
                    Nouvelle capture
                </a>
                
                <a href={imageUrl} download className="btn btn-success">
                    Télécharger l'image
                </a>
            </div>
        </main>
    );
}
