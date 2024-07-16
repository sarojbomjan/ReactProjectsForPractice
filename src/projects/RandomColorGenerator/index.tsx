import React, { useEffect, useState } from "react";

const RandomColorGenerator: React.FC = () => {
    const [typeOfColor, setTypeOfColor] = useState<"hex" | "rgb">("hex");
    const [color, setColor] = useState<string>("#000000");

    function randomColor(length: number): number {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {
        const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColor(hex.length)];
        }

        setColor(hexColor);
    }

    function handleCreateRandomRGBColor() {
        const r = randomColor(256);
        const g = randomColor(256);
        const b = randomColor(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(() => {
        if (typeOfColor === "rgb") handleCreateRandomRGBColor();
        else handleCreateRandomHexColor();
    }, [typeOfColor]);

    return (
        <div className="w-screen h-screen" style={{ backgroundColor: color }}>
            <div className="flex flex-col items-center justify-center h-full gap-4">
                <div className="flex gap-2">
                    <button className="m-2 p-2 bg-gray-800 text-white rounded" onClick={() => setTypeOfColor("hex")}>
                        Create HEX color
                    </button>
                    <button className="m-2 p-2 bg-gray-800 text-white rounded" onClick={() => setTypeOfColor("rgb")}>
                        Create RGB Color
                    </button>
                    <button
                        className="m-2 p-2 bg-gray-800 text-white rounded"
                        onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRGBColor}
                    >
                        Generate Random Color
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center text-white text-4xl space-y-4">
                    <h3>{typeOfColor === "rgb" ? "RGB color" : "HEX color"}</h3>
                    <h1>{color}</h1>
                </div>
            </div>
        </div>
    );
};

export default RandomColorGenerator;
