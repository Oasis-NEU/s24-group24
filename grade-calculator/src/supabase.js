import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

const supabaseUrl = "https://lsgnyirwgisacsewivei.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzZ255aXJ3Z2lzYWNzZXdpdmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2OTI3MTUsImV4cCI6MjAyNjI2ODcxNX0.NGmM0T7sjNFnGYExoM9rosSYQQAIThR3G3unCv8ACaE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
