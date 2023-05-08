import NextHead from 'next/head';

export default function Head({ title = '' }) {
    return (
        <NextHead>
            <title>
                {title}
                {title ? ' | ' : '' }linda portfolio
            </title>
            <meta name="description" content="Lindas portfolio" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo_white.ico" />
        </NextHead>
    )
}