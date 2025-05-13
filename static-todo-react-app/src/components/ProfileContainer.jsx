import ProfileCard from "./ProfileCard";

export default function ProfileContainer()
{
    
    return(
        <div className = "profile-container" >
           <ProfileCard name="John" age="35" bio=" A software engineer with 10 years of experience in the tech industry."/> 
           <ProfileCard  name="Mary" age="46" bio="A teacher with 10 years of experience in the elementary school education."/> 
           <ProfileCard name="Drew" age="21" bio="A customer service professional with 15 years of experience."/> 
           <ProfileCard  name="John" age="35" bio="A software engineer with 10 years of experience in the tech industry."/> 
        </div>
    );
}