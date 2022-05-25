export default class Task {
  id: number
  title: string
  done?: boolean

  constructor(id: number, title: string, done?: boolean) {
    this.id = id
    this.title = title
    this.done = done
  }

  getId(): number {
    return this.id
  }

  setId(id: number): void {
    this.id = id
  }

  getTitle(): string {
    return this.title
  }

  setTitle(title: string): void {
    this.title = title
  }

  getDone(): boolean {
    return this.done
  }

  setDone(done: boolean): void {
    this.done = done
  }


}