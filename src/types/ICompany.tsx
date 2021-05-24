export enum IANUAL_EARNINGS {
  BELOW_10_MIL = 'BELOW_10_MIL',
  FROM_10_TO_50_MIL = 'FROM_10_TO_50_MIL',
  FROM_50_TO_200_MIL = 'FROM_50_TO_200_MIL',
  FROM_200_TO_500_MIL = 'FROM_200_TO_500_MIL',
  ABOVE_500_MIL = 'ABOVE_500_MIL'
}

export interface ICompany {
  id: string
  name: string
  cnpj: string
  anual_earnings: IANUAL_EARNINGS;
  about: string
}
