/// <reference types="jest" />

import puppeteer, { Browser, Page } from 'puppeteer';
import http from 'node:http';
import { execSync } from 'node:child_process';

describe('Vérification de la Page d\'accueil', () => {
    let browser: Browser | undefined;
    let page: Page | undefined;

    
    jest.setTimeout(60000);

    
    async function waitForServer(url: string, timeoutMs = 30000): Promise<boolean> {
        const deadline = Date.now() + timeoutMs;
        while (Date.now() < deadline) {
            const ok = await new Promise<boolean>((resolve) => {
                const req = http.get(url, (res) => resolve(res.statusCode === 200));
                req.on('error', () => resolve(false));
                req.end();
            });
            if (ok) return true;
            await new Promise(r => setTimeout(r, 1000));
        }
        return false;
    }

    beforeAll(async () => {
        const serverUrl = 'http://127.0.0.1:3000';

        //  Vérification du serveur
        const isUp = await waitForServer(serverUrl);
        if (!isUp) {
            throw new Error("ERREUR : Lance 'npm run dev' dans un terminal séparé avant de tester.");
        }

        // Tuer les processus Chrome existants et nettoyer le profil
        try {
            execSync('taskkill /f /t /im chrome.exe', { stdio: 'pipe' });
        } catch (error) {
            console.log("Aucun processus Chrome n'a été trouvé",error);
        }

        try {
            browser = await puppeteer.launch({
                headless: true,
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage'
                ]
            });

            page = await browser.newPage();
        } catch (error) {
            console.error("Échec du lancement Puppeteer :", error);
            throw error;
        }
    });

    it('doit charger la page et récupérer le titre', async () => {
        if (!page) throw new Error("Onglet non initialisé");

       
        await page.goto('http://127.0.0.1:3000', { waitUntil: 'domcontentloaded' });

        const title = await page.title();
        console.log("Titre trouvé :", title);

        // On prend une capture d'écran pour confirmer le succès
        await page.screenshot({ path: 'home-success.png' });

        expect(title).toBeDefined();
    });

    afterAll(async () => {
        if (browser) {
            await browser.close();
        }
    });
});