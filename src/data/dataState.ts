export const dataState: DataStateType  = {
    pages:
    [
        {
            heading: 'Цикл while',
            about: 'Цікл while '
        },
        {
            heading: 'if',
            about: 'if '
        },
        {
            heading: 'Цикл hhhh',
            about: 'Цікл while '
        }
    ]
}



export type DataStateType = {
     pages: Array<PagesType>
}

export type PagesType = {
    heading: string
    about: string
}