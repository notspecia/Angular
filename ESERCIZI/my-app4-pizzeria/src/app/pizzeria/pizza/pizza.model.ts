//* INERFACE
// si possono avere+ interfacce all'interno di uno stesso file, poi ovviamente importerò nei Component quelle che di servono
// serve per utilizzarla dove mi pare!  QUESTO E IL TYPE PIZZA DEVE ESSERER USATO COME TYPE: SULLE PIZZE
export interface Pizza {
    nome: string,
    disponibilita: boolean,
    prezzo: number,
    ingredienti: string[]
}