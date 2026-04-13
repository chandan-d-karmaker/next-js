import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="text-center text-5xl font-black mt-20 flex flex-col justify-center items-center">
            <h2>This is about page</h2>
            <Image src='/miku-loading.gif' alt="" width={500} height={500}></Image>
        </div>
    );
};

export default AboutPage;