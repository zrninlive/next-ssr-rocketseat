import React from "react";
import styled from "styled-components";

import Link from "next/link";
import Head from "next/head";

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

import withAnalytics from "~/hocs/withAnalytics";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/panda.jpg" width="200px" />
    <Title>Hello World</Title>
    <Link href="/users">
      <a>Usuários</a>
    </Link>
  </div>
);

export default withAnalytics()(Home);
