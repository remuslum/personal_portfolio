import "./HomePage.module.css"
import Introduction from "./Introduction/Introduction";
import Skills from "./Skills/Skills";

export default function HomePage(){
    return (
        <div className="grow w-full flex">
            <Introduction />
            <Skills />
        </div>
    );
}

