export interface IProduct {
    id: number,
    name: string
}

export interface IBrand {
    id: number,
    name: string,
    brandType: string,
    productTyp: string
}

export interface Item {
    id: number,
    name: string,
    // stateId: number
    productType: string,
}

export interface ISelectVal {
    text: string;
    type: string;
}