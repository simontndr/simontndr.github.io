export interface PageProps {
    menuOptions: string[];
    currentPage : string;
};

export interface TextCardInfo{
    cardTitle:string;
    cardSubtitle:string;
    cardDate:string;
    cardText:string;
}

export interface TextGridProps{
    textCardInfos:TextCardInfo[];
}