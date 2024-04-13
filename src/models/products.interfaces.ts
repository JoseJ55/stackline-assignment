/*
File to hold the typescript interfaces so they can be used within the project.
(Note: Since this is a pseudo api they are all in this one file.)
*/

export interface reviewStructure {
    customer: string,
    review: string,
    score: number,
}

export interface salesStructure {
    weekEnding: string,
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number
}

export interface productStructure {
    id: string,
    title: string,
    image: string,
    subtitle: string,
    brand: string,
    reviews: reviewStructure[],
    retailer: string,
    details: string[],
    tags: string[],
    sales: salesStructure[],
}