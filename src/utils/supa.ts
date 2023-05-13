import { createClient, SupabaseClient } from '@supabase/supabase-js';

export const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
);