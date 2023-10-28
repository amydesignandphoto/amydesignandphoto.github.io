import React from 'react'

type PageProps = {
    pages: any
}

const Page = ({ pages }: PageProps) => {
    const page = pages.find((p: any) => p.id === PAGE_ID)
    return (
        <>
            <div>{PAGE_ID}</div>
            {/* @ts-ignore */}
            <div>{JSON.stringify(page)}</div>
        </>
    )
}

export default Page
