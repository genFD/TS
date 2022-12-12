const profile = {
  namee: 'alex',
  age: 20,
  coords: { lat: 0, lng: 14 },
  setAge(age: number): void {
    this.age = age;
  },
};
// destructuring

const {
  age,
  namee,
  coords: { lat, lng },
}: {
  age: number;
  namee: string;
  coords: { lat: number; lng: number };
} = profile;
