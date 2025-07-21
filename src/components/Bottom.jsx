const Bottom = () => {
    return (
        <div className="w-full h-auto text-white bg-mainbg">
            <footer className="relative w-[80%] mx-auto border-r border-r-gray-700 border-l border-l-gray-700 px-8 border-t border-t-gray-700">
                {/* === DIAMOND === */}
                <div className="absolute -top-10 -right-5 size-10 z-80">
                    <img src="/image/diamond.png" alt="" />
                </div>
                <div className="absolute -top-10 -left-5 size-10 z-80">
                    <img src="/image/diamond.png" alt="" />
                </div>
                <h1>Subas</h1>
            </footer>
        </div>
    );
};

export default Bottom;