import './Card.css'
import Description from './Description';
import Level from './Level';
import Name from './Name';
import SpellSchool from './SpellSchool';
import SpellStats from './SpellStats';
import Upcast from './UpcastDescription';
import VSMComponents from './VSMComponents';

let description = `A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of flame.
Each creature in a 20-foot radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save,
or half as much damage on a successful one.\n\nThe fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.
`
let upcastText = 'At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.'

function Card() {
    return (
        <div className='Card'>
            <Name name='Fireball' />
            <SpellStats />
            <Description text={description}>
                {upcastText !== '' && <Upcast text={upcastText}/>}
            </Description>

            <div className='cardFooter'>
                <VSMComponents verbal={true} somatic={true} material={true} />
                <Level level={3} />
                <SpellSchool school='Evocation' />
            </div>
        </div>
    );
}

export default Card;