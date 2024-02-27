// This problem was asked by Google.
// Suppose we represent our file system by a string in the following manner:
// The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

// dir
//     subdir1
//     subdir2
//         file.ext
// The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

// The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

// dir
//     subdir1
//         file1.ext
//         subsubdir1
//     subdir2
//         subsubdir2
//             file2.ext
// The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.
// We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).
// Given a string representing the file system in the above format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.

// Note:
// The name of a file contains at least a period and an extension.
// The name of a directory or sub-directory will not contain a period.



function lengthLongestPath(input: string): number {
  const lines = input.split('\n');
  let maxLen = 0;
  const stack: number[] = [0]; // Initialize with 0 to handle the root directory correctly

  for (const line of lines) {
      /* Find depth by counting the number of "\t". The depth is also the number of parent directories.
         The depth determines how far we should go back in our stack. */
      const depth = line.lastIndexOf('\t') + 1; // Depth is determined by the number of tabs

      // Calculate the current name's length (excluding "\t"s).
      const len = line.length - depth;

      /* If we're working with a file (it contains a period), check if this is the longest path.
         Otherwise, update the stack to reflect the current path's length.
         The "+1" accounts for the "/" that needs to be added between directories/files. */
      if (line.includes('.')) {
          // It's a file, check if it's the longest one
          maxLen = Math.max(maxLen, stack[depth] + len);
      } else {
          // It's a directory, update the stack
          if (depth + 1 < stack.length) {
              stack[depth + 1] = stack[depth] + len + 1; // Add 1 for the "/"
          } else {
              // Extend the stack if needed
              stack.push(stack[depth] + len + 1); // Add 1 for the "/"
          }
      }
  }

  return maxLen;
}

// Example usage
const input1 = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext";
const input2 = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext";

console.log(lengthLongestPath(input1)); // Should output the length of the path to file.ext
console.log(lengthLongestPath(input2)); // Should output the length of the path to file2.ext, which is the longest path
