import type { NextApiRequest, NextApiResponse } from "next";


const puppeteer = require("puppeteer"); // import puppeteer
;
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
    if (req.method === 'POST') {
    const { url } = req.body;
    if (!url || !url.startsWith('http')) {
        return res.status(400).json({ error: 'Url invalide' });
    }
    
    try {
            const browser = await puppeteer.launch(); // on lance puppeteer
            const page = await browser.newPage(); // on cree une nouvelle page
            await page.goto(url); // on va sur l'url
            await page.screenshot({ path: './public/screenshot.png', fullPage: true }); // on prend un screenshot de la page
            await browser.close();
            res.redirect(`/result?image=/screenshot.png`);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors du screenshot' });
        console.log(error);
    }
} else {
    res.status(405).json({ error: 'Méthode non autorisée' });
}

}