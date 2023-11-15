import { Button } from './ui/button';

export const Hero = () => {
  return (
    <section className="w-[90%] md:w-4/5 mx-auto h-full">
      <div className="flex flex-col items-center justify-evenly h-full">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl text-center font-medium font-inter">
            Welcome to my <br />
            <span className="inline-block bg-gradient-radial from-blue-500 via-orange-600 to-blue-700 font-bold text-transparent bg-clip-text p-2 animate-gradient bg-300% text-4xl md:text-6xl lg:text-7xl">
              Developer 
            </span>
            Portfolio
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-5">
          <a href="mailto:jayeshpaluru@gmail.com">
            <Button className="min-w-[150px] rounded-xl">Contact</Button>
          </a>
          <a href="https://drive.google.com/file/d/1NzYM3juWbzBYUC5tS8OYOOKVMODwNXaW/view?usp=sharing">
            <Button variant={'secondary'} className="min-w-[150px] rounded-xl">
              View CV
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
