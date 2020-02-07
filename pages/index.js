import React from 'react'
import Layout from '~/components/layout'
import nextCookie from 'next-cookies'

const Home = props => (
  <Layout token={props.token} onPage="home">
    <h1>Cookie-based authentication example</h1>

    <p>Steps to test the functionality:</p>

    <ol>
      <li>Click login and enter your GitHub username.</li>
      <li>
        Click home and click profile again, notice how your session is being
        used through a token stored in a cookie.
      </li>
      <li>
        Click logout and try to go to profile again. You'll get redirected to
        the `/login` route.
      </li>
    </ol>
    <style jsx>{`
      li {
        margin-bottom: 0.5rem;
      }
    `}</style>
  </Layout>
)

Home.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx)
  return { token }
}

export default Home