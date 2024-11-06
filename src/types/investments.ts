export type TInvestmentH = {
    name: string,
    location: string,
    price: string,
    ROI: number,
    img: string
}


export type TPropertyInfo = {
    img : string,
    name: string,
    location: string,
    price: number,
    percentageFilled: number,
    investorCount: number
}

export enum TAccountType {
    // Real Estates and Landlord
        REAL = "R.E.A.L",
    // Investors and Rental
        IAR= "I.A.R"
}


export type TActiveTab = "investments" |  "explore"  | "completed"