export default function Home() {
    return (
        <main style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            fontFamily: "Arial, sans-serif",
            textAlign: "center"
        }}>
            <h1 style={{
                fontSize: "3rem",
                color: "#333",
                marginBottom: "1rem"
            }}>
                Page de test 🌟
            </h1>

            <p style={{
                fontSize: "1.2rem",
                color: "#555",
                maxWidth: "400px"
            }}>
                Ceci est une jolie petite page pour tester ton application Next.js.
            </p>
        </main>
    )
}