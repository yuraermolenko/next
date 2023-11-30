
import React from 'react';

type TagProps = {
    onClick?: () => void;
    selected: boolean;
    readonly?: boolean;
    label: string;
};

const Tag: React.FC<TagProps> = ({ selected, readonly, label, onClick }) => {
    const tagClasses = `border border-black text-black text-center whitespace-nowrap md:text-xl py-1 px-2 ${
        selected ? 'bg-white' : 'bg-slate'
    }`;
    const buttonClasses = `${tagClasses} ${selected ? 'hover:bg-slate' : 'hover:bg-white'}`;
    const tagLabel = `#${label}`

    const tagElement = readonly ? (
        <span className={tagClasses}>
            {tagLabel}
        </span>
    ) : (
        <button onClick={onClick} className={buttonClasses}>
            {tagLabel}
        </button>
    );

    return tagElement;
};

export default Tag;
