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
        <Stat value='1 Action' icon='\assets\icons\SpellStats\casting_time.svg'/>
        <Stat value='150 feet' icon='\assets\icons\SpellStats\range.svg'/>
        <Stat value='Instant' icon='\assets\icons\SpellStats\duration.svg'/>
        <Stat value='8d6' icon='\assets\icons\SpellStats\d20.svg'/>
        <Stat value='DEX' icon='\assets\icons\SpellStats\save.svg'/>

    </div>
    );
}

export default SpellStats;