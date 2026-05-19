import OpenAI from 'openai';
import initialData from '../dataDasboard';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

// Inizializza il client OpenAI solo se è presente una chiave valida
let openai;
if (apiKey && !apiKey.includes('xxx')) {
    openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true 
    });
}

export const analyzeIdea = async (ideaText) => {
    // Se la chiave non è valida, usiamo i dati mock (demo mode)
    if (!openai) {
        console.warn("API key missing or invalid - running in demo mode");
        // Simuliamo un ritardo di rete per permettere al loader di mostrarsi
        return new Promise(resolve => setTimeout(() => resolve(initialData), 2000));
    }

    // Definiamo il prompt con le istruzioni e la struttura JSON desiderata
    // basandoci sulla struttura dell'oggetto "data" in dataDashboard.js
    const prompt = `
Sei un esperto valutatore di startup e business analyst.
Analizza la seguente idea di business e fornisci una valutazione dettagliata.

Idea di Business: "${ideaText}"

Devi restituire ESATTAMENTE un oggetto JSON valido con la seguente struttura:
{
    "ideaSummary": {
        "Title": "Un titolo accattivante e breve per l'idea",
        "Description": "Una descrizione professionale e concisa dell'idea"
    },
    "successScore": {
        "value": "Un punteggio da 0 a 100 che indica le probabilità di successo",
        "description": "Una breve spiegazione del punteggio assegnato"
    },
    "difficulty": [
        {
            "title": "Titolo di una barriera d'ingresso o potenziale difficoltà",
            "description": "Descrizione dettagliata della difficoltà"
        },
        {
            "title": "Titolo di un'altra difficoltà o problema di scalabilità",
            "description": "Descrizione dettagliata della difficoltà"
        }
    ],
    "personas": [
        {
            "name": "Nome fittizio del target di utenza",
            "role": "Ruolo o professione",
            "quote": "Una citazione che rappresenta il bisogno o problema di questa persona"
        }
    ],
    "competitors": [
        {
            "name": "Nome di un potenziale competitor (reale o ipotetico)",
            "coreBusiness": "Il suo business principale",
            "weakness": "La debolezza principale o lacuna nel mercato"
        }
    ],
    "verdict": {
        "text": "GO (se l'idea è promettente) oppure NO GO (se l'idea è da scartare o rivedere profondamente)",
        "color": "cyan (per GO) o red (per NO GO)",
        "description": "Una descrizione finale che giustifica il verdetto"
    }
}
`;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            response_format: { type: "json_object" },
            messages: [
                {
                    role: "system",
                    content: "Sei un utile assistente che analizza idee di business e restituisce unicamente oggetti JSON strutturati."
                },
                {
                    role: "user",
                    content: prompt
                }
            ]
        });

        // Parsiamo la stringa JSON restituita da OpenAI in un oggetto Javascript
        const data = JSON.parse(response.choices[0].message.content);
        return data;
    } catch (error) {
        console.error("Errore durante la comunicazione con l'API di OpenAI:", error);
        console.warn("Fallback to demo mode due to API error.");
        return initialData;
    }
};
