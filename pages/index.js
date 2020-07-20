import React from 'react';
import Link from 'next/Link';
import Router from 'next/router';

const authIndexPage = () => {
  return (
    <div>
      <h1>The Auth Index Page</h1>
      <p>
        Go to
        <Link href="/auth">
          <a>Auth</a>
        </Link>
      </p>
      <button onClick={() => Router.push('/auth')}>Go to Auth</button>
    </div>
  );
};

export default authIndexPage;
