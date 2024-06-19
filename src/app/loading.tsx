import {Spinner} from "@nextui-org/react";

export default function Loading() {
    return (
        <div className="bg-black h-screen flex justify-center items-center">
            <title>Loading | CyberGeek</title>
            <Spinner color="success" size="lg"/>
            <h1 className="ml-3 text-green-400  drop-shadow-[0_0_5px_rgba(74,222,128)]">Loading...</h1>
        </div>
    )
}