import React from "react";

function Button ({ className, handleEvent, name, imgSrc, imgAlt, imgClassName, id, disabled }) {
    return(
        <button type='submit' className={className} onClick={handleEvent} id={id} disabled={disabled}>
            <img 
                src={imgSrc}
                alt={imgAlt}
                className={imgClassName}
                id={id}
            />
            <p>{name}</p>
        </button>
    )
};

export default Button;