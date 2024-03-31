import './Card.css'

interface StatProps {
    icon?: string;
    value?: string;
}

function Stat ({icon, value}: StatProps) {
    return (
    <div className="Stat">
        {value}
    </div>
    );
}

export default Stat;