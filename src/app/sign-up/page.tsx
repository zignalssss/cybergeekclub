import React from "react";
import { Input } from "@nextui-org/input";

export default function News() {
    const styles = {
        label : "font-bold",
    }

    return (
        <div className="grid h-svh w-svw place-content-center">
            <div className="bg-[#181818] md:w-[600px] md:h-[800px] rounded-3xl">
                <h1 className="text-3xl text-center font-kanit font-bold py-20">Sign Up</h1>
                <div className="flex justify-center">
                    <div className="">
                        <Input
                            isRequired
                            type="email"
                            label="Email"
                            labelPlacement="outside"
                            placeholder="example@ku.th"
                            className="w-96"
                            classNames={{
                                label : "!text-white",
                                input : "bg-transparent !text-white",
                                inputWrapper : ["bg-[#302E2E]", "!group-data-[focused=true]:bg-[#302E2E]", "!hover:bg-[#302E2E]"],
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}