export default function ProfileCard(props){
    return (
        <div className="profilebox">
            <p>Name: {props.name}</p>
            <p >Age: <span style={{color:"darkred"}}>{props.age}</span></p>
            <p>Bio: {props.bio}</p>
            
        </div>
    );
}