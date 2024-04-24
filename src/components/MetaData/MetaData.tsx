import Head from 'next/head'

export default function CommonMeta({
  title = "株式会社タイシン",
  description = "株式会社タイシン　管材　住設備"
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={`${process.env.SITE_URL}/ogp_large.png`} /> */}
    </Head>
  )
}