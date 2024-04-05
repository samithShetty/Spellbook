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
            {verbal && <Stat icon='/assets/icons/VSM/verbal.svg'/>}
            {somatic && <Stat icon='/assets/icons/VSM/somatic.svg'/>}
            {material && <Stat icon='/assets/icons/VSM/material.svg'/>}
        </div>
    );
}

export default VSMComponents;