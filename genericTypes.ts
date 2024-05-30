class StorageContainer<T> {
  private contents: T[];

  constructor() {
    this.contents = [];
  }

  addItem(item: T): void {
    this.contents.push(item);
  }

  getItem(idx: number): T | undefined {
    return this.contents[idx];
  }
}

const username = new StorageContainer<string>();
username.addItem('Othman');
username.addItem('Ahmad');
console.log(username.getItem(0));

const scores = new StorageContainer<number>();
scores.addItem(13);
scores.addItem(29);
console.log(scores.getItem(0));
