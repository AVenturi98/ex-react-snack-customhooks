import * as React from "react";

export default function useCustomPointer(icon) {
    const [customPointer, setCustomPointer] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setCustomPointer({ x: e.clientX, y: e.clientY });
    };

    React.useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: customPointer.y,
                left: customPointer.x,
                pointerEvents: "none",
                transform: "translate(-50%, -50%)",
                fontSize: "24px",
            }}
        >
            {icon}
        </div>
    );
}