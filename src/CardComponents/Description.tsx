import './Card.css'

interface DescriptionProps {
    text: string;
    children?: React.ReactNode;
}

function Description ({text, children}: DescriptionProps) {
    return (
    <div className="Description">
        {text}
        {children}
    </div>
    );
}

export default Description;