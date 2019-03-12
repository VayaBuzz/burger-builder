import React from 'react';    // import the React Object from react library.

import classes from './Layout.css';
import Auxiliary from '../../hoc/Auxiliary';

const layout = ( props ) => (
    <Auxiliary>
        <div>Toobar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;