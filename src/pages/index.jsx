import Head from 'next/head';

const meta = {
  'description': 'Full stack web developer (JS/.NET)',
  'image': 'https://www.npozdeev.com/preview.png',
  'url': 'https://www.npozdeev.com',
  'title': 'Nikita Pozdeev',
}

const Home = () => {
  return (
    <>
      <Head> 
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Nikita Pozdeev</title>
        <meta name="description" content={meta.description}/>
        <meta name="image" content={meta.image}/>
        <meta name="og:url" content={meta.url} />
        <meta name="og:title" content={meta.title} />
        <meta name="og:description" content={meta.description} />
        <meta name="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content={meta.title}/>
        <meta name="twitter:description" content={meta.description}/>
        <meta name="twitter:image" content={meta.image}/>
      </Head>
      <article className="container__page">
        <p><span className="greetings">Hi</span>, I am a full stack web developer (JS/.NET)</p>
        <p>In my spare time I am interested in game development, open source, low-level programming</p>
      </article>
    </>
  )
}

export default Home;