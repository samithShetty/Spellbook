import './Card.css'
import Stat from './Stat';

interface LevelProps {
    level: number
}

function Level ({level}: LevelProps) {
    return (
        <div className='Level'>
            <Stat value={level.toString()}/>
        </div>
    );
}
export default Level;