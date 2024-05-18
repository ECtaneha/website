const url = process.env.NEXT_PUBLIC_ALLOW_URL;

export const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Methods": 'GET, POST, PUT, DELETE, OPTIONS',
  "Access-Control-Allow-Headers": "Content-Type, Authorization"
}
