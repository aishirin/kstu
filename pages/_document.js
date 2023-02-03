import { Head, Html, Main, NextScript } from 'next/document'

export default () => {
    return (
        <Html>
            <Head>
                <meta name='description' content='Институт информационных технологий, далее ИИТ, является структурным подразделением КГТУ им. И. Раззакова.' />
                <meta property='og:title' content='Институт информационных технологий' />
                <meta property='og:description' content='Институт информационных технологий, далее ИИТ, является структурным подразделением КГТУ им. И. Раззакова.' />
                <meta property='og:image' content='media/og/graph.png' />
                
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
                <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap' rel='stylesheet' />
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/uikit/3.15.10/css/uikit.min.css' integrity='sha512-srxkzdqvtmUP7azXhVS0Atlk62EsTXISnZ9GmIQ63/RCzIghbaG2gYs3MhMs4sDL/JKWQgU5dltpgF4waapwkA==' crossOrigin='anonymous' referrerPolicy='no-referrer' />

                <script src='https://cdnjs.cloudflare.com/ajax/libs/uikit/3.15.10/js/uikit.min.js' integrity='sha512-VWq6r9E8OCV2qkOEs6RO9kwTMytx/8QUkv2rRer70O4RYxAl2q9VG5dgui9m4/73jFFTEr9j41CXP6AFR10gnw==' crossOrigin='anonymous' referrerPolicy='no-referrer'></script>
            </Head>

            <body>
                <Main />

                <NextScript />
            </body>
        </Html>
    )
}