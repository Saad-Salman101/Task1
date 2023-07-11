import Page1 from "@/components/Landing Page/LandingPage";
// import { decremented, incremented } from "@/src/store/features/counterSlice";
import Head from "next/head";
// import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  // const { value } = useSelector((state) => state.counter);
  // const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Boilerplate</title>
        
      </Head>
      

      <main>
<Page1/>
      </main>
    </>
  );
}
