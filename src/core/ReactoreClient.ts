export class ReactoreClient<T> {
  data: T;

  constructor(reactoreData: T) {
    this.data = reactoreData;
  }

  modify(modifyData: Partial<T>) {
    this.data = { ...this.data, ...modifyData };
  }
}
