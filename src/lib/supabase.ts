import { createClient } from '@supabase/supabase-js'

// Project URL + anon/publishable key. Both are safe to ship client-side —
// access is enforced by RLS policies and the get-spec Edge Function, not
// by keeping this key secret.
const SUPABASE_URL = 'https://qccedagyqmxcxgharzzt.supabase.co'
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjY2VkYWd5cW14Y3hnaGFyenp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4OTY1ODUsImV4cCI6MjEwNDQ3MjU4NX0.yGsRs1B9o6Y68enHJIOrw1eqE6rkNhS6gjpmw4CCeeg'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
