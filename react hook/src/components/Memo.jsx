import React, { useMemo, useState } from 'react'

// useMemo() is used to store value during rerenders and prevent expensive calculation (looping through 10 million values)

const army = new Array(1_500_000).fill(0).map((_, i) => {
    return {
        id: i,
        isWizard: i == 36000
    }
});

const Memo = () => {
    // using state only to rerender
    const [count, setCount] = useState(0);
    // const wizard = army.find(person => person.isWizard); // this will compute again and again

    const wizard = useMemo(() => army.find(person => person.isWizard), []) // this will memoize the value and will not be calculated until the dependency in array change will is currently null

    return (
        <div>
            <h1>useMemo()</h1>
            <span>Wizard's id is {wizard.id}</span>
            <button onClick={() => setCount(count + 1)}>Increase Count: {count}</button>
        </div>
    )
}

export default Memo
