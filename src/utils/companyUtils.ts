import { IANUAL_EARNINGS } from "../types/ICompany";

export const getLabelFromEarnings = (value: IANUAL_EARNINGS) => {
  if (value === IANUAL_EARNINGS.BELOW_10_MIL) {
    return "Abaixo de 10 milhões"
  }
  if (value === IANUAL_EARNINGS.FROM_10_TO_50_MIL) {
    return "De 10 a 50 milhões"
  }
  if (value === IANUAL_EARNINGS.FROM_50_TO_200_MIL) {
    return "De 50 a 200 milhões"
  }
  if (value === IANUAL_EARNINGS.FROM_200_TO_500_MIL) {
    return "De 200 a 500 milhões"
  }
  if (value === IANUAL_EARNINGS.ABOVE_500_MIL) {
    return "Acima de 500 milhões"
  }

  return "Quantidade inválida"
}
