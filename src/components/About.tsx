export default function About() {
  return (
    <section
      className="bg-slate-950 rounded-[56px] h-max text-slate-50 p-6 md:p-10 my-10 sm:w-[90%] mx-auto"
      id="about"
    >
      <h2 className="text-3xl lg:text-4xl pb-5 pl-6 sm:px-16 font-bold">
        {'//About'}
      </h2>
      <div className="flex flex-col items-start justify-center h-full">
        <p className=" sm:px-12 py-5">
          I am a sophomore at the University of Texas at Dallas pursuing a BS in Data Science.
          I am currently working as a Data Science Intern at Humana. I am passionate about Data Science, Machine Learning, and Artificial Intelligence.
        </p>
      </div>
    </section>
  );
}
