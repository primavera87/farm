export interface Patient {
  id: number;
  name: string,
  middleName: string,
  surname: string,
  birthday: Date,
  sex: string,
  snils: string,
  consultation: []
}

export interface Patients {
  head: [],
  body: []
}
