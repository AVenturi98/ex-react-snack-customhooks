import * as React from 'react';

export default function useSwitch() {

    const [toggle, setToggle] = React.useState(false);

    const isOn = () => {
        setToggle(!toggle)
    }

    return [toggle, isOn]
}