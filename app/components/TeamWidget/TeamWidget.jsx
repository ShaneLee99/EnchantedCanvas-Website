import { useEffect, useState } from 'react';
import TeamCard from "./TeamCard";

const TeamWidget = () => {
    const [teamProfiles, setTeamProfiles] = useState([]);

    useEffect(() => {

        const getTeamProfiles = async () => {
            const res = await fetch('/api/getTeamProfiles', { headers: { 'Content-Type': 'application/json' } });
            const data = await res.json();
            setTeamProfiles(data);
        };

        getTeamProfiles();
    }, []);

    const renderTeamProfiles = () => {
        return teamProfiles.length ? teamProfiles.map((member, index) => {
            return (
                <TeamCard
                    key={index}
                    Name={member.Name}
                    Picture={member.Picture}
                    JobTitle={member.JobTitle}
                    Description={member.Description}
                    Socials={member.Socials}
                />
            );
        }) : null;
    };
    
    return (
        <div className="team-widget">
            <div className='
                grid 
                grid-flow-row
                3xl:grid-cols-6
                2xl:grid-cols-5
                xl:grid-cols-4
                lg:grid-cols-3
                md:grid-cols-2
                sm:grid-cols-2
                grid-cols-1
                gap-8
                mx-w-screen-x1 
                xl:px-24
                lg:px-18
                md:px-10
                sm:px-8
                px-4
                py-16
                overflow-hidden
                transition-all
                z-10'
            >
                {renderTeamProfiles()}
            </div>
        </div>
    );
};

export default TeamWidget;