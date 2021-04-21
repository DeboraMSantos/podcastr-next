import React from "react";

export default function Home(props) {
  return (
    <div>
      <h1>TODOS OS EPISÓDIOS</h1>
      {props.episodes.map((episode) => (

        <p>{episode.title}</p>
      ))}

    </div>
  );
}


//SSG - Static Site Generation (para carregar poucas vezes ao dia e não a todo momento)
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 1,
  }

}