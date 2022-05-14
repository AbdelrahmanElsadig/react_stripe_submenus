import { useContext, createContext, useState } from "react";

const ModalContext = createContext<ModalContextProp | {}>({});

const ModalContextWrapper = ({ children }: { children: any }) => {
    const [isModalOpen, setModal] = useState<boolean>(false);
    return (
        <ModalContext.Provider value={{ isModalOpen, setModal }}>
            {children}
        </ModalContext.Provider>

    )
}

export { ModalContextWrapper, ModalContext }