import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// Verifica che le variabili d'ambiente siano presenti
if (!supabaseUrl || !supabaseKey) {
    console.warn(
        '[supabaseService] Variabili d\'ambiente Supabase mancanti. ' +
        'Assicurati di aver definito VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_KEY nel file .env'
    );
}

// Inizializza e esporta il client Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);