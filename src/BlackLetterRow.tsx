import React from 'react'

type BlackLetterRowProps = {
    rowId: string
    count?: number
}

const BlackLetterRow = ({ rowId, count = 4 }: BlackLetterRowProps) => {
    const arr = Array(count).fill(0)
    return (
        <div className={`black-letters ${rowId}`} id={rowId}>
            {arr.map(() => (
                <img className="black-letter-child" src="assets/Amy Design and Photo_black.png" />
            ))}
        </div>
    )
}

export default BlackLetterRow
