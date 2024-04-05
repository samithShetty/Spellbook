import './Card.css'
import Stat from './Stat'

interface SpellSchoolProps {
    school: string;
}

function getSchoolIcon(school: string): string {
    return '/assets/icons/SpellSchools/'+school.toLowerCase()+'.webp';
    // return '';
}


function SpellSchool({school}: SpellSchoolProps) {
    return (
        <div className='SpellSchool'>
            <Stat value={school} icon={getSchoolIcon(school)}/>
        </div>
    );
}

export default SpellSchool;