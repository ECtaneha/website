const url = process.env.NEXT_PUBLIC_VERCEL_HOST;

export const corsHeaders = {
  "Access-Control-Allow-Origin": '*',
  "Access-Control-Allow-Methods": 'GET, POST, PUT, DELETE, OPTIONS',
  "Access-Control-Allow-Headers": 'Content-Type, Authorization'
}
