import Image from "next/image";


const Logo = () => {
    return ( 
        <Image src={"/logo-long.svg"} height={130} width={130} alt="logo-big" />
     );
}
 
export default Logo;