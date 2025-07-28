import { forwardRef } from "react";

const ProjectsCard = forwardRef(({name, translateY, headingBG}, ref) => {
    
    return(
        <div className={`cards w-[50vw] h-[55vh] text-white rounded-2xl absolute flex flex-col bg-white/10 backdrop-blur-lg border border-white/30 ${translateY}`} ref={ref}>
           <div className={`h-[10vh] ${headingBG} flex justify-center items-center rounded-t-2xl`}>
            <h3 className="text-center text-xl ">{name}</h3>
           </div>

          <div className="flex justify-around items-center margin-top">
            <p className="w-[22.1vw] tracking-wide leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ex ducimus nulla dolore, recusandae harum id nobis quaerat ipsam tempore corporis inventore sunt velit quibusdam modi esse error blanditiis ipsum vitae dolor, voluptates quo vero quia optio. Saepe, consequuntur magnam.</p>
            <img src="https://placehold.co/275x240" alt="" className="rounded-xl"/>
          </div> 
        </div>
    )
});

export default ProjectsCard;

