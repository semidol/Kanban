
export type TCard = {
    id: string,
    name: string,
    description: string
}

export interface ICardProps {
    data: TCard
}

export interface IColumn {
    title: string,
    issues: TCard[]
}

export interface IColumnProps {
    number: number
}

export interface IContext {
    data: IColumn[],
    setData: React.Dispatch<React.SetStateAction<IColumn[]>> | null
}