import { IconType } from "react-icons"

type ModalContextProp = {
    isModalOpen: boolean,
    setModal: (value: boolean) => void,
}

interface sublink {
    label: string,
    icon,
    url: string
}

type ModalLink = {
    page: string,
    links: sublink[]
}

export { sublink, ModalLink, ModalContextProp }

