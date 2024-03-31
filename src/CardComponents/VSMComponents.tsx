import './Card.css'
import Stat from './Stat';

interface VSMProps {
    verbal: boolean;
    somatic: boolean;
    material: boolean;
}

function VSMComponents({verbal, somatic, material}: VSMProps) {
    return (
        <div className='VSMComponents'>
            {verbal && <Stat value='V'/>}
            {somatic && <Stat value='S'/>}
            {material && <Stat value='M'/>}
        </div>
    );
}

export default VSMComponents;