export class StringCollection {
  data: string;
  constructor(data: string) {
    this.data = data;
  }
  // getter to get the length of the collection// dont have
  // to call length like so length()
  get length(): number {
    return this.data.length;
  }
  // will return true if left index is greater than right index
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  /**
   * Algo to swap string
   - Separate characters into array of characters
   -  do array swap
   */
  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;
    this.data = characters.join('');
  }
}
