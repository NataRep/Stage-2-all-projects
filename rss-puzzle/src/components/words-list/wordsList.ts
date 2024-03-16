import Word from '../word/word';
import { FunctionForEach } from '../../utils/types';

class Node {
  value: Word;

  next: Node | null;

  constructor(word: Word) {
    this.value = word;
    this.next = null;
  }
}

class WordsList {
  head: Node | null;

  tail: Node | null;

  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  private createNode(word: Word): Node {
    return new Node(word);
  }

  public push(word: Word): Node {
    const node = this.createNode(word);
    if (!this.head) {
      this.head = node;
    } else if (!this.tail) {
      this.head.next = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return node;
  }

  public insertWordByIndex(word: Word, index: number): void {
    const node: Node = this.createNode(word);
    if (this.length - 1 < index) throw Error('Invalid index for insert');
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let currentIndex: number = 0;
      let currentNode: Node = this.head;
      while (currentIndex < index - 1) {
        currentNode = currentNode.next;
        currentIndex += 1;
      }
      if (currentNode.next) {
        node.next = currentNode.next;
        currentNode.next = node;
      } else {
        currentNode.next = node;
        this.tail = node;
      }
    }
    this.length += 1;
  }

  public remove(elem: HTMLElement): Word {
    let result = false;
    let currentNode = this.head;
    let removedWord;

    if (!currentNode) {
      throw new Error('List is empty');
    }

    if (currentNode.value.element === elem) {
      removedWord = this.head.value;
      this.head = this.head.next;
      result = true;

      if (!this.head) {
        this.tail = null;
      }
    } else {
      while (currentNode.next) {
        if (currentNode.next.value.element === elem) {
          if (currentNode.next === this.tail) {
            removedWord = this.tail.value;
            currentNode.next = null;
            this.tail = currentNode;
          } else {
            removedWord = currentNode.next.value;
            currentNode.next = currentNode.next.next;
          }
          result = true;
          break;
        }
        currentNode = currentNode.next;
      }
    }

    if (!result) {
      throw new Error('Element not found in list');
    }

    this.length -= 1;
    return removedWord;
  }

  public includes(str: string): boolean {
    let currentNode = this.head;
    let result = false;
    while (currentNode) {
      if (currentNode.value.value === str) result = true;
      if (currentNode.next) currentNode = currentNode.next;
      if (!currentNode.next) break;
    }
    return result;
  }

  public getByIndex(index: number): Node {
    if (index === 0) return this.head;
    if (this.length - 1 < index) throw new Error('Invalid index for insert');
    if (this.length - 1 === index) return this.tail;

    let currentIndex = 0;
    let currentNode = this.head;

    while (currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex += 1;
    }
    return currentNode;
  }

  public shuffle(): void {
    const array: Node[] = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode);
      currentNode = currentNode.next;
    }
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.head = array[0];
    this.tail = array[array.length - 1];
    for (let i = 0; i < array.length - 1; i++) {
      array[i].next = array[i + 1];
    }
    array[array.length - 1].next = null;
  }

  public getWordsStrArray(): string[] {
    const array: string[] = [];
    if (this.length > 0) {
      let currentNode = this.head;
      while (currentNode) {
        array.push(currentNode.value.value);
        currentNode = currentNode.next;
      }
    }
    return array;
  }

  public forEachElem(fn: FunctionForEach) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      fn(currentNode.value, index);
      index += 1;
      currentNode = currentNode.next;
    }
  }
}

export default WordsList;
