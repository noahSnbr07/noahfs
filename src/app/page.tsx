'use server';

import Intro from "./views/intro/intro";

export default async function page() {


  return (
    <div className="h-full">
      <Intro />
    </div>
  );
}