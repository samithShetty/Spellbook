import './Card.css'
import Stat from './Stat'

interface SpellSchoolProps {
    school: string;
}

function SpellSchool({school}: SpellSchoolProps) {
    return (
        <div className='SpellSchool'>
            <Stat value={school}/>
        </div>
    );
}

export default SpellSchool;