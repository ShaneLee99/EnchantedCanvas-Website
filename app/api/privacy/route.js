import Privacy from './privacy.json';

export async function GET() {
    return Response.json(Privacy);
};