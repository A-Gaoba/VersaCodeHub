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

  searchPrefix(prefix: string): string[] {
      let node = this.root;
      const result: string[] = [];

      for (const char of prefix) {
          if (node.children.has(char)) {
              node = node.children.get(char)!;
          } else {
              return result;
          }
      }

      this.collectWords(node, prefix, result);

      return result;
  }

  collectWords(node: TrieNode, prefix: string, result: string[]): void {
      if (node.isEndOfWord) {
          result.push(prefix);
      }

      for (const [char, child] of node.children) {
          this.collectWords(child, prefix + char, result);
      }
  }
}

function autocomplete(query: string, words: string[]): string[] {
  const trie = new Trie();

  // Preprocess the dictionary into the Trie data structure
  for (const word of words) {
      trie.insert(word);
  }

  // Search for words with the given query prefix in the Trie
  return trie.searchPrefix(query);
}

// Example usage
const query = "de";
const dictionary = ["dog", "deer", "deal"];
const autocompleteResults = autocomplete(query, dictionary);

console.log(autocompleteResults); // Output: ["deer", "deal"]
