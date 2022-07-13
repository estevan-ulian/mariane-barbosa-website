import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='pt-BR'>
            <Head />
            <body className={`font-inter`}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}