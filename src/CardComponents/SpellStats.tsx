import './Card.css'
import Stat from './Stat';

interface SpellStatsProps {
    castingTime?: string;
    duration?: string;
    range?: number;
    die?: string;
    save?: string;
}

function SpellStats ({castingTime, duration, range, die, save}: SpellStatsProps) {
    return (
    <div className="SpellStats">
        <Stat value='1 Action' />
        <Stat value='150 feet' />
        <Stat value='Instant' />
        <Stat value='8d6' />
        <Stat value='DEX' />

    </div>
    );
}

export default SpellStats;