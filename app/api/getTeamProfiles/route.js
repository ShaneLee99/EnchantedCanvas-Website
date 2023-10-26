import TeamProfiles from './profiles.json';

export async function GET() {
    return Response.json(TeamProfiles);
};