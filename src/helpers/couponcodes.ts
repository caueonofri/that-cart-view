export interface Coupon {
  id:string;
  amount:number;
  isPercentage: boolean;
}

export const couponList:Array<Coupon> = [
  {
    id: 'quero20reais',
    amount: 20,
    isPercentage: false
  },
  {
    id: 'quero10porcento',
    amount: 10,
    isPercentage: true
  },
  {
    id: 'quero200reais',
    amount: 200,
    isPercentage: false
  },
  {
    id: 'quero20porcento',
    amount: 20,
    isPercentage: true
  },
  {
    id: 'eusouobrabo',
    amount: 100,
    isPercentage: true
  }

]
