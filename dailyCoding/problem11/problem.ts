// This problem was asked by Twitter.
// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.
// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.isEndOfWord = true;
  }

  search(prefix: string): string[] {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return [];
      }
      node = node.children.get(char)!;
    }
    return this.getAllWords(node, prefix);
  }

  private getAllWords(node: TrieNode, currentWord: string): string[] {
    const result: string[] = [];
    if (node.isEndOfWord) {
      result.push(currentWord);
    }

    for (const [char, childNode] of node.children.entries()) {
      result.push(...this.getAllWords(childNode, currentWord + char));
    }

    return result;
  }
}

function autocomplete(query: string, words: string[]): string[] {
  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }
  return trie.search(query);
}

// Example usage:
const query = "de";
const wordSet = ["dog", "deer", "deal"];
const autocompleteResults = autocomplete(query, wordSet);
console.log(autocompleteResults);
