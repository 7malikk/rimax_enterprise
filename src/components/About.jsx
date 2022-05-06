import React from 'react';

const About = () => {
  return (
    <>
      <section className="p-6  text-white bg-[url('https://images.unsplash.com/photo-1490351267196-b7a67e26e41b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1581&q=80')] h-full bg-no-repeat bg-center">
        <div className="split grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
          <div className="details text-2xl text-justify text-black bg-[#c2c2f088] rounded-3xl p-2 mb-10 md:mb-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            nostrum vel sit est voluptates? Sequi ducimus nulla dolores,
            voluptate ad expedita ipsam error cupiditate eius cum temporibus
            aperiam reprehenderit quae? Modi officia vel eos nobis vero
            perspiciatis fugiat beatae delectus esse, aperiam nemo eligendi
            libero ea facere natus dolore consequuntur sequi sed amet nisi
            aliquid! Sint, aliquid. Asperiores, dolores maxime!
          </div>
          <div className="img ">
            <img
              className="rounded-3xl"
              src="https://images.unsplash.com/photo-1472148439583-1f4cf81b80e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="moreDetails text-center mt-10 w-4/5 m-auto text-black rounded-3xl p-2 bg-[#c2c2f088]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nam
          repudiandae commodi, fugit aliquam expedita laudantium at quas
          incidunt corporis minima placeat mollitia illo, reprehenderit soluta
          qui! Dolorum, porro quo! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Magni numquam rem laborum quidem distinctio,
          mollitia aliquid laudantium quaerat voluptatum eum quam? Excepturi,
          dolores voluptas. Aliquam, sapiente! Nihil nam vel hic?
        </div>
      </section>
    </>
  );
};

export default About;
