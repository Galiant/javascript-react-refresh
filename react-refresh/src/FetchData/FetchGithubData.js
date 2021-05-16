import React, { useState, useEffect } from 'react';

function GitHubUser({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (data) {
    console.log('DATA', data);
    return (
      <>
        <div>Username: {data.login}</div>
        <div>Bio: {data.bio}</div>
        <br />
        <img src={data.avatar_url} width={100} alt={data.login} />
      </>
    );
  }
  return null;
}

export default function ReactUseEffectFetchGithub() {
  return <GitHubUser login='Galiant' />;
}
