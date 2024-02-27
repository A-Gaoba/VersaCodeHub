# Longest Absolute Path in Filesystem

## Overview

This document details the solution to finding the longest absolute path to a file within a simulated filesystem represented as a string. The filesystem is structured using newline (`\n`) and tab (`\t`) characters to denote directories and their nesting levels.

## Problem Statement

Given a string that represents a filesystem, where:
- Directories and files are delineated by newline characters (`\n`).
- The nesting level (depth) of directories and files is indicated by the number of tab characters (`\t`) preceding their names.
- A file is identified by the presence of a period (`.`) in its name.

The goal is to determine the length of the longest absolute path to a file within this filesystem. If no file exists, the function should return 0.

## Solution Algorithm

### Steps

1. **Split the Input**: Convert the input string into an array of strings, each representing a file or directory.
2. **Use a Stack**: Employ a stack to track the cumulative length of paths at various depths.
3. **Process Each Line**: For each line (file or directory):
   - Calculate its depth based on the number of tabs.
   - Determine its name length by subtracting the depth from the total length.
4. **Handle Files and Directories**:
   - If it's a file, update the maximum length if this file's path is the longest found.
   - If it's a directory, update the stack with the cumulative path length to this directory.
5. **Output**: Return the maximum path length found to a file.

### TypeScript Implementation

```typescript
function lengthLongestPath(input: string): number {
    const lines = input.split('\n');
    let maxLen = 0;
    const stack: number[] = [0]; // Stack to track path length at each depth

    for (const line of lines) {
        const depth = line.lastIndexOf('\t') + 1;
        const len = line.length - depth;

        if (line.includes('.')) { // It's a file
            maxLen = Math.max(maxLen, stack[depth] + len);
        } else { // It's a directory
            if (depth + 1 < stack.length) {
                stack[depth + 1] = stack[depth] + len + 1; // Update path length including '/'
            } else {
                stack.push(stack[depth] + len + 1); // Add new depth
            }
        }
    }

    return maxLen;
}

// Example Usage
const input = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext";
console.log(lengthLongestPath(input)); // Outputs the length of the longest path
```

## Conclusion

The provided algorithm and TypeScript implementation effectively solve the problem of finding the longest absolute path to a file within a given simulated filesystem string. By employing a stack to track the cumulative path lengths and carefully processing each line of the input, the solution efficiently calculates and returns the desired output.


