const data = {

    ideaSummary: {
        Title: "Micro-SaaS Autonomo",
        Description: "Diagnostica avanzata che mappa la fattibilità tecnica in ambienti di agricoltura urbana ad alta densità. L'analisi si concentra sulla calibrazione dei nutrienti in tempo reale, sui flussi di dati di imaging spettrale e sull'ottimizzazione predittiva del ciclo di raccolto per infrastrutture verticali.",
    },

    successScore: {
        value: "100",
        description: "Punteggio di successo massimo stimato",
    },

    difficulty: [
        {
            title: "BARRIERE D'INGRESSO AL MERCATO",
            description: "I requisiti di capitale iniziale per i sensori IoT ad alta precisione rappresentano il punto di attrito principale.",
        },

        {
            title: "VETTORI DI SCALABILITÀ",
            description: "L'architettura modulare consente una scalabilità orizzontale fluida tra i vari hub agricoli metropolitani.",
        },
    ],

    personas: [
        {
            name: "Marcus Thorne",
            role: "Proprietario di Fattoria Verticale",
            quote: "Si concentra sulla riduzione dei costi operativi e sulla massimizzazione della resa per metro quadrato tramite un'automazione rigorosa."
        },

        {
            name: "Elena Rodriguez",
            role: "Direttrice della Sostenibilità",
            quote: "Priorità all'economia circolare delle risorse e a metriche trasparenti sull'impatto ambientale per la rendicontazione istituzionale."
        },

        {
            name: "Dr. Aris Varma",
            role: "Consulente Agricolo",
            quote: "Richiede esportazioni di dati ad alta precisione e controllo granulare sui parametri di crescita algoritmica."
        }

    ],

    competitors: [
        {
            name: "AgroPulse",
            coreBusiness: "Sensori di monitoraggio del suolo rurale su larga scala",
            weakness: "Scarsa integrazione con sistemi idroponici verticali"
        },

        {
            name: "YieldBot",
            coreBusiness: "Mercato per la selezione delle colture basato su IA",
            weakness: "Indipendente dall'hardware; nessun monitoraggio in tempo reale"
        },

        {
            name: "GreenSense",
            coreBusiness: "Kit di automazione per serre a livello consumer",
            weakness: "Manca di analisi predittive di livello aziendale"
        }
    ],

    verdict: {
        text: "GO",
        color: "cyan", // red x no GO
        description: "Houston, GO for launch!"
    }


}

export default data;
