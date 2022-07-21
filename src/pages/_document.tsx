import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='pt-BR'>
            <Head />
            <body className={`font-inter font-light`}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}