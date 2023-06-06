import Icons from "../General/Icons";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="h-96 sm:pt-20 flex items-center pl-5 text-light-blue4 dark:text-white bg-gradient-to-br from-light-blue1 -from-30% to-light-blue3  dark:from-black dark:from-20% dark:to-dark-blue3">
            <text className="font-thin w-28 sm:w-48 text-6xl sm:text-7xl flex transform -rotate-90 whitespace-nowrap justify-center">ABOUT US</text>
            <div className="flex flex-col justify-center h-4/5">
                <div className="h-full flex flex-col justify-between items-start">
                    <Link target={"_blank"}
                    to={"https://github.com/raissarossi/fast.git"} 
                    className="flex items-center">
                        <Icons icon="gitDark" />
                        <Icons icon="gitLight" />
                        <text className="pl-2 text-light-blue4 dark:text-white font-semibold">Our repository...</text>
                    </Link>
                    <Link target={"_blank"} 
                    to={"https://www.figma.com/file/i1scwmFGvUgrozcorP0ae5/FastBank?type=design&node-id=54%3A2&t=3Uofw6F9VlxxRjeg-1"} 
                    className="flex items-center">
                        <Icons icon="figmaLight" />
                        <Icons icon="figmaDark" />
                        <text className="pl-2 text-light-blue4 dark:text-white font-semibold">Our design...</text>
                    </Link>
                    <Link target={"_blank"} 
                    to={"https://azure.microsoft.com/"} 
                    className="flex items-center">
                        <Icons icon="azureLight" />
                        <Icons icon="azureDark" />
                        <text className="pl-2 text-light-blue4 dark:text-white font-semibold">Backend deployment...</text>
                    </Link>
                    <Link target={"_blank"} 
                    to={"https://vercel.com/"} 
                    className="flex items-center">
                        <Icons icon="vercelLight" />
                        <Icons icon="vercelDark" />
                        <text className="pl-2 text-light-blue4 dark:text-white font-semibold">Frontend deployment...</text>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;