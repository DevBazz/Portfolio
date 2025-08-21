import { forwardRef } from "react";

const ProjectsCard = forwardRef(({ name, translateY, headingBG }, ref) => {
  return (
    <div
      ref={ref}
      className={`cards 
        w-full sm:w-[80%] lg:w-[60%] 
        min-h-[40vh] sm:min-h-[45vh] lg:min-h-[55vh] 
        text-white rounded-2xl absolute 
        flex flex-col bg-white/10 backdrop-blur-lg border border-white/30 
        ${translateY}`}
    >
      {/* Header */}
      <div
        className={`h-16 sm:h-20 ${headingBG} flex justify-center items-center rounded-t-2xl`}
      >
        <h3 className="text-center text-lg sm:text-xl lg:text-2xl font-semibold">
          {name}
        </h3>
      </div>

      {/* Content Section */}
      <div className="flex flex-col sm:flex-row justify-around items-center gap-6 p-4">
        <p className="w-full sm:w-[60%] tracking-wide leading-relaxed text-sm sm:text-base lg:text-lg text-center sm:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ex
          ducimus nulla dolore, recusandae harum id nobis quaerat ipsam tempore
          corporis inventore sunt velit quibusdam modi esse error blanditiis
          ipsum vitae dolor, voluptates quo vero quia optio. Saepe, consequuntur
          magnam.
        </p>

        <img
          src="https://placehold.co/275x240"
          alt="Project Preview"
          className="w-[200px] sm:w-[250px] lg:w-[275px] rounded-xl object-cover"
        />
      </div>
    </div>
  );
});

export default ProjectsCard;
