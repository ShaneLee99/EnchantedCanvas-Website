import Privacy from './aboutus.json';

export async function GET() {
    return Response.json(Privacy);
};