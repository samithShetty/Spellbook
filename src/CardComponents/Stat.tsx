import './Card.css'

interface StatProps {
    icon?: string;
    value?: string;
}

function Stat ({icon, value}: StatProps) {
    return (
    <div className="Stat">
        {icon && <img src={icon} className='cardIcon'/>}{value}
    </div>
    );
}

export default Stat;