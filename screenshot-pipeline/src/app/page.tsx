export default function Home() {
    return (
        <main className="page-container">
            <h1 className="page-title">
                Page de test Formulaire 🌟
            </h1>

            <p className="form-section">Bienvenue sur notre page de test ! Vous pouvez utiliser ce formulaire pour prendre des captures d'écran de sites web.</p>
            
            <form action="/api/route" method="post" className="form-container">
                <label htmlFor="url" className="form-label">URL du site à capturer :</label>
                <input 
                    type="url" 
                    id="url" 
                    name="url" 
                    required 
                    placeholder="https://exemple.com"
                    className="form-input"
                />
                <button type="submit" className="submit-btn">📸 Prendre la capture</button>
            </form>
        </main>
    )
}