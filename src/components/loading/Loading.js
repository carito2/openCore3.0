import React from 'react';

import './loading.css';

function Loading () {
    return(
        <section className='loading flex'>
            <h1>Loading</h1>
            <iframe src="https://giphy.com/embed/cjnnH0h3cfBTORaUnp" frameBorder="0" className='giphy-embed' allowFullScreen></iframe><p><a href="https://giphy.com/stickers/LeBuzzStudio-transparent-cjnnH0h3cfBTORaUnp"></a></p>
        </section>
    )
}

export default Loading;