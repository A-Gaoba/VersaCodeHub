class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }

    node.isEndOfWord = true;
  }

  searchPrefix(prefix) {
    let node = this.root;
    const result = [];

    for (const char of prefix) {
      if (node.children.has(char)) {
        node = node.children.get(char);
      } else {
        return result;
      }
    }

    this.collectWords(node, prefix, result);

    return result;
  }

  collectWords(node, prefix, result) {
    if (node.isEndOfWord) {
      result.push(prefix);
    }

    for (const [char, child] of node.children) {
      this.collectWords(child, prefix + char, result);
    }
  }
}

function autocomplete(query, words) {
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
