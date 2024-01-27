// This problem was asked by Twitter.
// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.
// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
var TrieNode = /** @class */ (function () {
    function TrieNode() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
    return TrieNode;
}());
var Trie = /** @class */ (function () {
    function Trie() {
        this.root = new TrieNode();
    }
    Trie.prototype.insert = function (word) {
        var node = this.root;
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEndOfWord = true;
    };
    Trie.prototype.search = function (prefix) {
        var node = this.root;
        for (var _i = 0, prefix_1 = prefix; _i < prefix_1.length; _i++) {
            var char = prefix_1[_i];
            if (!node.children.has(char)) {
                return [];
            }
            node = node.children.get(char);
        }
        return this.getAllWords(node, prefix);
    };
    Trie.prototype.getAllWords = function (node, currentWord) {
        var result = [];
        if (node.isEndOfWord) {
            result.push(currentWord);
        }
        for (var _i = 0, _a = node.children.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], char = _b[0], childNode = _b[1];
            result.push.apply(result, this.getAllWords(childNode, currentWord + char));
        }
        return result;
    };
    return Trie;
}());
function autocomplete(query, words) {
    var trie = new Trie();
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        trie.insert(word);
    }
    return trie.search(query);
}
// Example usage:
var query = "de";
var wordSet = ["dog", "deer", "deal"];
var autocompleteResults = autocomplete(query, wordSet);
console.log(autocompleteResults);
