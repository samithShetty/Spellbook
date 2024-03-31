import './Card.css'

interface NameProps {
    name : string;
}

function Name ({name}: NameProps) {
    return <div className="Name">{name}</div>;
}

export default Name;