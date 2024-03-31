import './Card.css'

interface UpcastProps {
    text : string;
}

function Upcast ({text}: UpcastProps) {
    return (
        <div className="Upcast">{text}</div>
    );
}

export default Upcast;