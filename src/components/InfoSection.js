import React from 'react';

export default function InfoSection(props) {
    const {children} = props;

    return (
        <div>
            <Text type={h1}>{children}</Text>
            <Text type={p}>{children}</Text>
           
        </div>
    )
}

// h1, p, button