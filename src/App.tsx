import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import daniel from "./assets/images/image-daniel.jpg";
import jeanette from "./assets/images/image-jeanette.jpg";
import jonathan from "./assets/images/image-jonathan.jpg";
import kira from "./assets/images/image-kira.jpg";
import patrick from "./assets/images/image-patrick.jpg";

function App() {
  return (
    <div className="App">
      <main className="font-barlow grid grid-cols-1 lg:grid-cols-4">
        <article className="bg-[#7541C8] text-white p-12 rounded-lg text-start bg-quotation bg-no-repeat bg-[top_right_2rem] mt-5 lg:col-span-2 lg:m-5 shadow-xl">
          <div id="header" className="flex">
            <picture>
              <img src={daniel} alt="" className="rounded-full border w-12" />
            </picture>
            <div className="pl-5">
              <p>Daniel Clifford</p>
              <p className="text-[#CFCFCF]">Verified Graduate</p>
            </div>
          </div>
          <h1 className="text-2xl py-5">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny’s worth.
          </h1>
          <p className="text-[#CFCFCF]">
            “ I was an EMT for many years before I joined the bootcamp. I’ve
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </p>
        </article>

        <article className="bg-[#48556A] text-white p-12 rounded-lg text-start mt-5 lg:m-5 shadow-xl">
          <div id="header" className="flex">
            <picture>
              <img src={jonathan} alt="" className="rounded-full border w-12" />
            </picture>
            <div className="pl-5">
              <p>Jonathan Walters</p>
              <p className="text-[#CFCFCF]">Verified Graduate</p>
            </div>
          </div>
          <h1 className="text-2xl py-5">
            The team was very supportive and kept me motivated.
          </h1>
          <p className="text-[#CFCFCF]">
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself. ”
          </p>
        </article>

        <article className="bg-white text-[#19212E] p-12 rounded-lg text-start mt-5 lg:row-start-2 lg:m-5 shadow-xl">
          <div id="header" className="flex">
            <picture>
              <img src={jeanette} alt="" className="rounded-full border w-12" />
            </picture>
            <div className="pl-5">
              <p>Jeanette Harmon</p>
              <p className="text-[#CFCFCF]">Verified Graduate</p>
            </div>
          </div>
          <h1 className="text-2xl py-5">
            An overall wonderful and rewarding experience.
          </h1>
          <p className="text-[#CFCFCF]">
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </p>
        </article>

        <article className="bg-[#19212E] text-white p-12 rounded-lg text-start mt-5 lg:col-start-2 lg:col-end-4 lg:m-5 shadow-xl">
          <div id="header" className="flex">
            <picture>
              <img src={patrick} alt="" className="rounded-full border w-12" />
            </picture>
            <div className="pl-5">
              <p>Patrick Abrams</p>
              <p className="text-[#CFCFCF]">Verified Graduate</p>
            </div>
          </div>
          <h1 className="text-2xl py-5">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </h1>
          <p className="text-[#CFCFCF]">
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </p>
        </article>

        <article className="bg-white text-[#19212E] p-12 rounded-lg text-start mt-5 lg:col-start-4 lg:row-start-1 lg:row-end-5 lg:m-5 shadow-xl">
          <div id="header" className="flex">
            <picture>
              <img src={kira} alt="" className="rounded-full border w-12" />
            </picture>
            <div className="pl-5">
              <p>Kira Whittle</p>
              <p className="text-[#CFCFCF]">Verified Graduate</p>
            </div>
          </div>
          <h1 className="text-2xl py-5">
            Such a life-changing experience. Highly recommended!
          </h1>
          <p className="text-[#CFCFCF]">
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </article>
      </main>
    </div>
  );
}

export default App;
