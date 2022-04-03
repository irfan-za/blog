/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Head from 'next/head';
import Header from './Header';

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={props.desc} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.desc} />
        <meta property="og:site_name" content="Z Blog" />
        <meta property="og:url" content="https://z-blog.vercel.app" />
        <meta property="og:image" content={props.img} />
      </Head>
      <Header />
      {children}
    </>
  );
}
