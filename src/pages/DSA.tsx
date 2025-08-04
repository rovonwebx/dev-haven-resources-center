import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Home, Brain, Clock, CheckCircle, ExternalLink, Code, ArrowUp, ChevronDown, Target } from "lucide-react";

// --- DATA SET 1: The Original 150 Questions ---
const companyPrepQuestions = [
    // Full list of 150 questions from the previous step...
    { id: 1, title: "Contains Duplicate", category: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/contains-duplicate/" },
    { id: 2, title: "Valid Anagram", category: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/valid-anagram/" },
    { id: 3, title: "Valid Palindrome", category: "Two Pointers", difficulty: "Easy", url: "https://leetcode.com/problems/valid-palindrome/" },
    { id: 4, title: "Best Time to Buy And Sell Stock", category: "Sliding Window", difficulty: "Easy", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
    { id: 5, title: "Valid Parentheses", category: "Stack", difficulty: "Easy", url: "https://leetcode.com/problems/valid-parentheses/" },
    { id: 6, title: "Binary Search", category: "Binary Search", difficulty: "Easy", url: "https://leetcode.com/problems/binary-search/" },
    { id: 7, title: "Reverse Linked List", category: "Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-linked-list/" },
    { id: 8, title: "Invert Binary Tree", category: "Trees", difficulty: "Easy", url: "https://leetcode.com/problems/invert-binary-tree/" },
    { id: 9, title: "Same Tree", category: "Trees", difficulty: "Easy", url: "https://leetcode.com/problems/same-tree/" },
    { id: 10, title: "Climbing Stairs", category: "1-D DP", difficulty: "Easy", url: "https://leetcode.com/problems/climbing-stairs/" },
    { id: 11, title: "Plus One", category: "Math", difficulty: "Easy", url: "https://leetcode.com/problems/plus-one/" },
    { id: 12, title: "Two Sum", category: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/two-sum/" },
    { id: 13, title: "Two Sum II Input Array Is Sorted", category: "Two Pointers", difficulty: "Easy", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
    { id: 14, title: "Min Stack", category: "Stack", difficulty: "Easy", url: "https://leetcode.com/problems/min-stack/" },
    { id: 15, title: "Merge Two Sorted Lists", category: "Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
    { id: 16, title: "Maximum Depth of Binary Tree", category: "Trees", difficulty: "Easy", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
    { id: 17, title: "Kth Largest Element in a Stream", category: "Priority Queue", difficulty: "Easy", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
    { id: 18, title: "Subsets", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/subsets/" },
    { id: 19, title: "Min Cost Climbing Stairs", category: "1-D DP", difficulty: "Easy", url: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
    { id: 20, title: "Happy Number", category: "Math", difficulty: "Easy", url: "https://leetcode.com/problems/happy-number/" },
    { id: 21, title: "Group Anagrams", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/group-anagrams/" },
    { id: 22, title: "Longest Substring Without Repeating Characters", category: "Sliding Window", difficulty: "Medium", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
    { id: 23, title: "Evaluate Reverse Polish Notation", category: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
    { id: 24, title: "Koko Eating Bananas", category: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/koko-eating-bananas/" },
    { id: 25, title: "Reorder List", category: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/reorder-list/" },
    { id: 26, title: "Subtree of Another Tree", category: "Trees", difficulty: "Easy", url: "https://leetcode.com/problems/subtree-of-another-tree/" },
    { id: 27, title: "K Closest Points to Origin", category: "Priority Queue", difficulty: "Medium", url: "https://leetcode.com/problems/k-closest-points-to-origin/" },
    { id: 28, title: "Combination Sum", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum/" },
    { id: 29, title: "Permutations", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/permutations/" },
    { id: 30, title: "Letter Combinations of a Phone Number", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
    { id: 31, title: "Number of Islands", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-islands/" },
    { id: 32, title: "Walls And Gates", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/walls-and-gates/" },
    { id: 33, title: "Rotting Oranges", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/rotting-oranges/" },
    { id: 34, title: "Longest Palindromic Substring", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/longest-palindromic-substring/" },
    { id: 35, title: "Longest Common Subsequence", category: "2-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/longest-common-subsequence/" },
    { id: 36, title: "Gas Station", category: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/gas-station/" },
    { id: 37, title: "Merge Intervals", category: "Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/merge-intervals/" },
    { id: 38, title: "Spiral Matrix", category: "Math", difficulty: "Medium", url: "https://leetcode.com/problems/spiral-matrix/" },
    { id: 39, title: "Reverse Bits", category: "Bit Manipulation", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-bits/" },
    { id: 40, title: "Reverse Integer", category: "Bit Manipulation", difficulty: "Medium", url: "https://leetcode.com/problems/reverse-integer/" },
    { id: 41, title: "Top K Frequent Elements", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
    { id: 42, title: "Generate Parentheses", category: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/generate-parentheses/" },
    { id: 43, title: "Find Minimum in Rotated Sorted Array", category: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
    { id: 44, title: "Remove Nth Node From End of List", category: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
    { id: 45, title: "Lowest Common Ancestor of a Binary Search Tree", category: "Trees", difficulty: "Medium", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
    { id: 46, title: "Kth Largest Element in an Array", category: "Priority Queue", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
    { id: 47, title: "Combination Sum II", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum-ii/" },
    { id: 48, title: "Subsets II", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/subsets-ii/" },
    { id: 49, title: "Surrounded Regions", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/surrounded-regions/" },
    { id: 50, title: "Palindromic Substrings", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/palindromic-substrings/" },
    { id: 51, title: "Best Time to Buy and Sell Stock With Cooldown", category: "2-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/" },
    { id: 52, title: "Encode and Decode Strings", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/encode-and-decode-strings/" },
    { id: 53, title: "3Sum", category: "Two Pointers", difficulty: "Medium", url: "https://leetcode.com/problems/3sum/" },
    { id: 54, title: "Longest Repeating Character Replacement", category: "Sliding Window", difficulty: "Medium", url: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
    { id: 55, title: "Daily Temperatures", category: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/daily-temperatures/" },
    { id: 56, title: "Search in Rotated Sorted Array", category: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
    { id: 57, title: "Copy List With Random Pointer", category: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
    { id: 58, title: "Binary Tree Level Order Traversal", category: "Trees", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
    { id: 59, title: "Task Scheduler", category: "Priority Queue", difficulty: "Medium", url: "https://leetcode.com/problems/task-scheduler/" },
    { id: 60, title: "Word Search", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/word-search/" },
    { id: 61, title: "Implement Trie (Prefix Tree)", category: "Tries", difficulty: "Medium", url: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
    { id: 62, title: "Clone Graph", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/clone-graph/" },
    { id: 63, title: "Decode Ways", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/decode-ways/" },
    { id: 64, title: "Coin Change II", category: "2-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/coin-change-ii/" },
    { id: 65, title: "Hand of Straights", category: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/hand-of-straights/" },
    { id: 66, title: "Non Overlapping Intervals", category: "Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/non-overlapping-intervals/" },
    { id: 67, title: "Meeting Rooms II", category: "Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/meeting-rooms-ii/" },
    { id: 68, title: "Product of Array Except Self", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/product-of-array-except-self/" },
    { id: 69, title: "Container With Most Water", category: "Two Pointers", difficulty: "Medium", url: "https://leetcode.com/problems/container-with-most-water/" },
    { id: 70, title: "Permutation in String", category: "Sliding Window", difficulty: "Medium", url: "https://leetcode.com/problems/permutation-in-string/" },
    { id: 71, title: "Add Two Numbers", category: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/add-two-numbers/" },
    { id: 72, title: "Binary Tree Right Side View", category: "Trees", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-right-side-view/" },
    { id: 73, title: "Palindrome Partitioning", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/palindrome-partitioning/" },
    { id: 74, title: "Pacific Atlantic Water Flow", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
    { id: 75, title: "Coin Change", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/coin-change/" },
    { id: 76, title: "Target Sum", category: "2-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/target-sum/" },
    { id: 77, title: "Merge Triplets to Form Target Triplet", category: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/" },
    { id: 78, title: "Multiply Strings", category: "Math", difficulty: "Medium", url: "https://leetcode.com/problems/multiply-strings/" },
    { id: 79, title: "Valid Sudoku", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/valid-sudoku/" },
    { id: 80, title: "Minimum Window Substring", category: "Sliding Window", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-window-substring/" },
    { id: 81, title: "Car Fleet", category: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/car-fleet/" },
    { id: 82, title: "Time Based Key Value Store", category: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/time-based-key-value-store/" },
    { id: 83, title: "Find The Duplicate Number", category: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/find-the-duplicate-number/" },
    { id: 84, title: "Count Good Nodes in Binary Tree", category: "Trees", difficulty: "Medium", url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/" },
    { id: 85, title: "Longest Consecutive Sequence", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
    { id: 86, title: "Trapping Rain Water", category: "Two Pointers", difficulty: "Hard", url: "https://leetcode.com/problems/trapping-rain-water/" },
    { id: 87, title: "Largest Rectangle In Histogram", category: "Stack", difficulty: "Hard", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
    { id: 88, title: "Median of Two Sorted Arrays", category: "Binary Search", difficulty: "Hard", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
    { id: 89, title: "Merge K Sorted Lists", category: "Linked List", difficulty: "Hard", url: "https://leetcode.com/problems/merge-k-sorted-lists/" },
    { id: 90, title: "Construct Binary Tree From Preorder And Inorder Traversal", category: "Trees", difficulty: "Medium", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
    { id: 91, title: "Find Median From Data Stream", category: "Priority Queue", difficulty: "Hard", url: "https://leetcode.com/problems/find-median-from-data-stream/" },
    { id: 92, title: "N Queens", category: "Backtracking", difficulty: "Hard", url: "https://leetcode.com/problems/n-queens/" },
    { id: 93, title: "Word Search II", category: "Tries", difficulty: "Hard", url: "https://leetcode.com/problems/word-search-ii/" },
    { id: 94, title: "Word Ladder", category: "Graphs", difficulty: "Hard", url: "https://leetcode.com/problems/word-ladder/" },
    { id: 95, title: "Reconstruct Itinerary", category: "Advanced Graphs", difficulty: "Hard", url: "https://leetcode.com/problems/reconstruct-itinerary/" },
    { id: 96, title: "Partition Equal Subset Sum", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
    { id: 97, title: "Distinct Subsequences", category: "2-D DP", difficulty: "Hard", url: "https://leetcode.com/problems/distinct-subsequences/" },
    { id: 98, title: "Edit Distance", category: "2-D DP", difficulty: "Hard", url: "https://leetcode.com/problems/edit-distance/" },
    { id: 99, title: "Reverse Nodes In K Group", category: "Linked List", difficulty: "Hard", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
    { id: 100, title: "Binary Tree Maximum Path Sum", category: "Trees", difficulty: "Hard", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
    { id: 101, title: "Min Cost to Connect All Points", category: "Advanced Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/min-cost-to-connect-all-points/" },
    { id: 102, title: "Cheapest Flights Within K Stops", category: "Advanced Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
    { id: 103, title: "Burst Balloons", category: "2-D DP", difficulty: "Hard", url: "https://leetcode.com/problems/burst-balloons/" },
    { id: 104, title: "Serialize And Deserialize Binary Tree", category: "Trees", difficulty: "Hard", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
    { id: 105, title: "Swim In Rising Water", category: "Advanced Graphs", difficulty: "Hard", url: "https://leetcode.com/problems/swim-in-rising-water/" },
    { id: 106, title: "Alien Dictionary", category: "Advanced Graphs", difficulty: "Hard", url: "https://leetcode.com/problems/alien-dictionary/" },
    { id: 107, title: "Regular Expression Matching", category: "2-D DP", difficulty: "Hard", url: "https://leetcode.com/problems/regular-expression-matching/" },
    { id: 108, title: "House Robber", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/house-robber/" },
    { id: 109, title: "House Robber II", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/house-robber-ii/" },
    { id: 110, title: "Longest Increasing Subsequence", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
    { id: 111, title: "Word Break", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/word-break/" },
    { id: 112, title: "Unique Paths", category: "2-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/unique-paths/" },
    { id: 113, title: "Jump Game", category: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/jump-game/" },
    { id: 114, title: "Insert Interval", category: "Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/insert-interval/" },
    { id: 115, title: "Pow(x, n)", category: "Math", difficulty: "Medium", url: "https://leetcode.com/problems/powx-n/" },
    { id: 116, title: "Rotate Image", category: "Math", difficulty: "Medium", url: "https://leetcode.com/problems/rotate-image/" },
    { id: 117, title: "Number of 1 Bits", category: "Bit Manipulation", difficulty: "Easy", url: "https://leetcode.com/problems/number-of-1-bits/" },
    { id: 118, title: "Counting Bits", category: "Bit Manipulation", difficulty: "Easy", url: "https://leetcode.com/problems/counting-bits/" },
    { id: 119, title: "Missing Number", category: "Bit Manipulation", difficulty: "Easy", url: "https://leetcode.com/problems/missing-number/" },
    { id: 120, title: "Sum of Two Integers", category: "Bit Manipulation", difficulty: "Medium", url: "https://leetcode.com/problems/sum-of-two-integers/" },
    { id: 121, title: "Sliding Window Maximum", category: "Sliding Window", difficulty: "Hard", url: "https://leetcode.com/problems/sliding-window-maximum/" },
    { id: 122, title: "LRU Cache", category: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/lru-cache/" },
    { id: 123, title: "Validate Binary Search Tree", category: "Trees", difficulty: "Medium", url: "https://leetcode.com/problems/validate-binary-search-tree/" },
    { id: 124, title: "Design Add and Search Words Data Structure", category: "Tries", difficulty: "Medium", url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
    { id: 125, title: "Course Schedule", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/course-schedule/" },
    { id: 126, title: "Course Schedule II", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/course-schedule-ii/" },
    { id: 127, title: "Graph Valid Tree", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/graph-valid-tree/" },
    { id: 128, title: "Number of Connected Components in an Undirected Graph", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/" },
    { id: 129, "title": "Maximum Product Subarray", "category": "1-D DP", "difficulty": "Medium", "url": "https://leetcode.com/problems/maximum-product-subarray/" },
    { id: 130, "title": "Jump Game II", "category": "Greedy", "difficulty": "Medium", "url": "https://leetcode.com/problems/jump-game-ii/" },
    { id: 131, "title": "Meeting Rooms", "category": "Intervals", "difficulty": "Easy", "url": "https://leetcode.com/problems/meeting-rooms/" },
    { id: 132, "title": "Set Matrix Zeroes", "category": "Math", "difficulty": "Medium", "url": "https://leetcode.com/problems/set-matrix-zeroes/" },
    { id: 133, "title": "Single Number", "category": "Bit Manipulation", "difficulty": "Easy", "url": "https://leetcode.com/problems/single-number/" },
    { id: 134, "title": "Maximum Subarray", "category": "1-D DP", "difficulty": "Medium", "url": "https://leetcode.com/problems/maximum-subarray/" },
    { id: 135, "title": "Contains Duplicate II", "category": "Arrays", "difficulty": "Easy", "url": "https://leetcode.com/problems/contains-duplicate-ii/" },
    { id: 136, "title": "Longest Palindrome", "category": "Arrays", "difficulty": "Easy", "url": "https://leetcode.com/problems/longest-palindrome/" },
    { id: 137, "title": "Is Subsequence", "category": "Two Pointers", "difficulty": "Easy", "url": "https://leetcode.com/problems/is-subsequence/" },
    { id: 138, "title": "Backspace String Compare", "category": "Stack", "difficulty": "Easy", "url": "https://leetcode.com/problems/backspace-string-compare/" },
    { id: 139, "title": "Search a 2D Matrix", "category": "Binary Search", "difficulty": "Medium", "url": "https://leetcode.com/problems/search-a-2d-matrix/" },
    { id: 140, "title": "Linked List Cycle", "category": "Linked List", "difficulty": "Easy", "url": "https://leetcode.com/problems/linked-list-cycle/" },
    { id: 141, "title": "Diameter of Binary Tree", "category": "Trees", "difficulty": "Easy", "url": "https://leetcode.com/problems/diameter-of-binary-tree/" },
    { id: 142, "title": "Last Stone Weight", "category": "Priority Queue", "difficulty": "Easy", "url": "https://leetcode.com/problems/last-stone-weight/" },
    { id: 143, "title": "Generate Subsets (Power Set)", "category": "Backtracking", "difficulty": "Medium", "url": "https://leetcode.com/problems/subsets/" },
    { id: 144, "title": "Flood Fill", "category": "Graphs", "difficulty": "Easy", "url": "https://leetcode.com/problems/flood-fill/" },
    { id: 145, "title": "Best Time to Buy and Sell Stock II", "category": "Greedy", "difficulty": "Medium", "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/" },
    { id: 146, "title": "Maximum Units on a Truck", "category": "Greedy", "difficulty": "Easy", "url": "https://leetcode.com/problems/maximum-units-on-a-truck/" },
    { id: 147, "title": "Sort Colors", "category": "Math", "difficulty": "Medium", "url": "https://leetcode.com/problems/sort-colors/" },
    { id: 148, "title": "Find All Anagrams in a String", "category": "Sliding Window", "difficulty": "Medium", "url": "https://leetcode.com/problems/find-all-anagrams-in-a-string/" },
    { id: 149, "title": "Remove Duplicates from Sorted List", "category": "Linked List", "difficulty": "Easy", "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/" },
    { id: 150, "title": "Balanced Binary Tree", "category": "Trees", "difficulty": "Easy", "url": "https://leetcode.com/problems/balanced-binary-tree/" },
];

// --- DATA SET 2: The New Top 100 Curated Questions ---
const top100Questions = [
  { id: 1, title: "Two Sum", category: "Arrays", difficulty: "Easy" },
  { id: 2, title: "Best Time to Buy and Sell Stock", category: "Arrays", difficulty: "Easy" },
  { id: 3, title: "Contains Duplicate", category: "Arrays", difficulty: "Easy" },
  { id: 4, title: "Product of Array Except Self", category: "Arrays", difficulty: "Medium" },
  { id: 5, title: "Maximum Subarray", category: "Arrays", difficulty: "Medium" },
  { id: 6, title: "Maximum Product Subarray", category: "Arrays", difficulty: "Medium" },
  { id: 7, title: "Find Minimum in Rotated Sorted Array", category: "Binary Search", difficulty: "Medium" },
  { id: 8, title: "Search in Rotated Sorted Array", category: "Binary Search", difficulty: "Medium" },
  { id: 9, title: "3Sum", category: "Two Pointers", difficulty: "Medium" },
  { id: 10, title: "Container With Most Water", category: "Two Pointers", difficulty: "Medium" },
  { id: 11, title: "Longest Substring Without Repeating Characters", category: "Sliding Window", difficulty: "Medium" },
  { id: 12, title: "Longest Repeating Character Replacement", category: "Sliding Window", difficulty: "Medium" },
  { id: 13, title: "Minimum Window Substring", category: "Sliding Window", difficulty: "Hard" },
  { id: 14, title: "Valid Anagram", category: "Strings", difficulty: "Easy" },
  { id: 15, title: "Group Anagrams", category: "Strings", difficulty: "Medium" },
  { id: 16, title: "Valid Parentheses", category: "Stack", difficulty: "Easy" },
  { id: 17, title: "Min Stack", category: "Stack", difficulty: "Easy" },
  { id: 18, title: "Evaluate Reverse Polish Notation", category: "Stack", difficulty: "Medium" },
  { id: 19, title: "Generate Parentheses", category: "Stack", difficulty: "Medium" },
  { id: 20, title: "Daily Temperatures", category: "Stack", difficulty: "Medium" },
  { id: 21, title: "Car Fleet", category: "Stack", difficulty: "Medium" },
  { id: 22, title: "Largest Rectangle in Histogram", category: "Stack", difficulty: "Hard" },
  { id: 23, title: "Reverse Linked List", category: "Linked List", difficulty: "Easy" },
  { id: 24, title: "Merge Two Sorted Lists", category: "Linked List", difficulty: "Easy" },
  { id: 25, title: "Reorder List", category: "Linked List", difficulty: "Medium" },
  { id: 26, title: "Remove Nth Node From End of List", category: "Linked List", difficulty: "Medium" },
  { id: 27, title: "Linked List Cycle", category: "Linked List", difficulty: "Easy" },
  { id: 28, title: "Merge K Sorted Lists", category: "Linked List", difficulty: "Hard" },
  { id: 29, title: "Add Two Numbers", category: "Linked List", difficulty: "Medium" },
  { id: 30, title: "Copy List with Random Pointer", category: "Linked List", difficulty: "Medium" },
  { id: 31, title: "LRU Cache", category: "Linked List", difficulty: "Medium" },
  { id: 32, title: "Invert Binary Tree", category: "Trees", difficulty: "Easy" },
  { id: 33, title: "Maximum Depth of Binary Tree", category: "Trees", difficulty: "Easy" },
  { id: 34, title: "Diameter of Binary Tree", category: "Trees", difficulty: "Easy" },
  { id: 35, title: "Balanced Binary Tree", category: "Trees", difficulty: "Easy" },
  { id: 36, title: "Same Tree", category: "Trees", difficulty: "Easy" },
  { id: 37, title: "Subtree of Another Tree", category: "Trees", difficulty: "Easy" },
  { id: 38, title: "Lowest Common Ancestor of a BST", category: "Trees", difficulty: "Medium" },
  { id: 39, title: "Binary Tree Level Order Traversal", category: "Trees", difficulty: "Medium" },
  { id: 40, title: "Binary Tree Right Side View", category: "Trees", difficulty: "Medium" },
  { id: 41, title: "Count Good Nodes in Binary Tree", category: "Trees", difficulty: "Medium" },
  { id: 42, title: "Validate Binary Search Tree", category: "Trees", difficulty: "Medium" },
  { id: 43, "title": "Kth Smallest Element in a BST", "category": "Trees", "difficulty": "Medium" },
  { id: 44, "title": "Construct Tree from Preorder and Inorder Traversal", "category": "Trees", "difficulty": "Medium" },
  { id: 45, "title": "Binary Tree Maximum Path Sum", "category": "Trees", "difficulty": "Hard" },
  { id: 46, "title": "Serialize and Deserialize Binary Tree", "category": "Trees", "difficulty": "Hard" },
  { id: 47, "title": "Implement Trie (Prefix Tree)", "category": "Tries", "difficulty": "Medium" },
  { id: 48, "title": "Design Add and Search Words Data Structure", "category": "Tries", "difficulty": "Medium" },
  { id: 49, "title": "Word Search II", "category": "Tries", "difficulty": "Hard" },
  { id: 50, "title": "Find Median from Data Stream", "category": "Heap", "difficulty": "Hard" },
  { id: 51, "title": "Top K Frequent Elements", "category": "Heap", "difficulty": "Medium" },
  { id: 52, "title": "Subsets", "category": "Backtracking", "difficulty": "Medium" },
  { id: 53, "title": "Combination Sum", "category": "Backtracking", "difficulty": "Medium" },
  { id: 54, "title": "Permutations", "category": "Backtracking", "difficulty": "Medium" },
  { id: 55, "title": "Word Search", "category": "Backtracking", "difficulty": "Medium" },
  { id: 56, "title": "Palindrome Partitioning", "category": "Backtracking", "difficulty": "Medium" },
  { id: 57, "title": "N-Queens", "category": "Backtracking", "difficulty": "Hard" },
  { id: 58, "title": "Climbing Stairs", "category": "DP", "difficulty": "Easy" },
  { id: 59, "title": "Coin Change", "category": "DP", "difficulty": "Medium" },
  { id: 60, "title": "Longest Increasing Subsequence", "category": "DP", "difficulty": "Medium" },
  { id: 61, "title": "Longest Common Subsequence", "category": "DP", "difficulty": "Medium" },
  { id: 62, "title": "Word Break", "category": "DP", "difficulty": "Medium" },
  { id: 63, "title": "Combination Sum IV", "category": "DP", "difficulty": "Medium" },
  { id: 64, "title": "House Robber", "category": "DP", "difficulty": "Medium" },
  { id: 65, "title": "House Robber II", "category": "DP", "difficulty": "Medium" },
  { id: 66, "title": "Decode Ways", "category": "DP", "difficulty": "Medium" },
  { id: 67, "title": "Unique Paths", "category": "DP", "difficulty": "Medium" },
  { id: 68, "title": "Jump Game", "category": "DP", "difficulty": "Medium" },
  { id: 69, "title": "Number of Islands", "category": "Graphs", "difficulty": "Medium" },
  { id: 70, "title": "Clone Graph", "category": "Graphs", "difficulty": "Medium" },
  { id: 71, "title": "Course Schedule", "category": "Graphs", "difficulty": "Medium" },
  { id: 72, "title": "Pacific Atlantic Water Flow", "category": "Graphs", "difficulty": "Medium" },
  { id: 73, "title": "Number of Connected Components", "category": "Graphs", "difficulty": "Medium" },
  { id: 74, "title": "Graph Valid Tree", "category": "Graphs", "difficulty": "Medium" },
  { id: 75, "title": "Word Ladder", "category": "Graphs", "difficulty": "Hard" },
  { id: 76, "title": "Rotting Oranges", "category": "Graphs", "difficulty": "Medium" },
  { id: 77, "title": "Min Cost to Connect All Points", "category": "Graphs", "difficulty": "Medium" },
  { id: 78, "title": "Cheapest Flights Within K Stops", "category": "Graphs", "difficulty": "Medium" },
  { id: 79, "title": "Insert Interval", "category": "Intervals", "difficulty": "Medium" },
  { id: 80, "title": "Merge Intervals", "category": "Intervals", "difficulty": "Medium" },
  { id: 81, "title": "Non-overlapping Intervals", "category": "Intervals", "difficulty": "Medium" },
  { id: 82, "title": "Meeting Rooms", "category": "Intervals", "difficulty": "Easy" },
  { id: 83, "title": "Meeting Rooms II", "category": "Intervals", "difficulty": "Medium" },
  { id: 84, "title": "Reverse Bits", "category": "Bit Manipulation", "difficulty": "Easy" },
  { id: 85, "title": "Number of 1 Bits", "category": "Bit Manipulation", "difficulty": "Easy" },
  { id: 86, "title": "Counting Bits", "category": "Bit Manipulation", "difficulty": "Easy" },
  { id: 87, "title": "Missing Number", "category": "Bit Manipulation", "difficulty": "Easy" },
  { id: 88, "title": "Sum of Two Integers", "category": "Bit Manipulation", "difficulty": "Medium" },
  { id: 89, "title": "Gas Station", "category": "Greedy", "difficulty": "Medium" },
  { id: 90, "title": "Hand of Straights", "category": "Greedy", "difficulty": "Medium" },
  { id: 91, "title": "Merge Triplets to Form Target", "category": "Greedy", "difficulty": "Medium" },
  { id: 92, "title": "Maximum Subarray", "category": "Greedy", "difficulty": "Medium" },
  { id: 93, "title": "Jump Game", "category": "Greedy", "difficulty": "Medium" },
  { id: 94, "title": "Trapping Rain Water", "category": "Advanced", "difficulty": "Hard" },
  { id: 95, "title": "Find Median from Data Stream", "category": "Advanced", "difficulty": "Hard" },
  { id: 96, "title": "Sliding Window Maximum", "category": "Advanced", "difficulty": "Hard" },
  { id: 97, "title": "Word Ladder II", "category": "Advanced", "difficulty": "Hard" },
  { id: 98, "title": "Basic Calculator", "category": "Advanced", "difficulty": "Hard" },
  { id: 99, "title": "Text Justification", "category": "Advanced", "difficulty": "Hard" },
  { id: 100, "title": "Integer to English Words", "category": "Advanced", "difficulty": "Hard" },
].map(q => ({ ...q, url: `https://leetcode.com/problems/${q.title.toLowerCase().replace(/ /g, '-')}/` }));


// --- DATA SET 3: Fully Populated FAANG Questions ---
const faangQuestions = {
    "Arrays & Matrix": ["Two Sum", "Best Time to Buy and Sell Stock", "Contains Duplicate", "Product of Array Except Self", "Maximum Subarray", "Maximum Product Subarray", "Find Minimum in Rotated Sorted Array", "Search in Rotated Sorted Array", "3Sum", "Container With Most Water", "Group Anagrams", "Top K Frequent Elements", "Longest Consecutive Sequence", "Set Matrix Zeroes", "Spiral Matrix", "Rotate Image"],
    "Strings": ["Longest Substring Without Repeating Characters", "Longest Repeating Character Replacement", "Minimum Window Substring", "Valid Anagram", "Group Anagrams", "Valid Parentheses", "Valid Palindrome", "Longest Palindromic Substring", "Palindromic Substrings", "Encode and Decode Strings"],
    "Linked Lists": ["Reverse Linked List", "Merge Two Sorted Lists", "Reorder List", "Remove Nth Node From End of List", "Linked List Cycle", "Merge K Sorted Lists", "Add Two Numbers", "Copy List with Random Pointer", "LRU Cache", "Reverse Nodes in K-Group"],
    "Trees & Graphs": ["Invert/Flip Binary Tree", "Maximum Depth of Binary Tree", "Same Tree", "Subtree of Another Tree", "Lowest Common Ancestor of a BST", "Binary Tree Level Order Traversal", "Binary Tree Right Side View", "Validate Binary Search Tree", "Kth Smallest Element in a BST", "Construct Tree from Traversals", "Binary Tree Maximum Path Sum", "Serialize and Deserialize Binary Tree", "Number of Islands", "Clone Graph", "Course Schedule", "Pacific Atlantic Water Flow", "Word Ladder"],
    "Dynamic Programming": ["Climbing Stairs", "Coin Change", "Longest Increasing Subsequence", "Longest Common Subsequence", "Word Break Problem", "Combination Sum", "House Robber", "House Robber II", "Decode Ways", "Unique Paths", "Jump Game", "Edit Distance", "Maximum Product Subarray", "Partition Equal Subset Sum"],
    "Heaps & Tries": ["Find Median from Data Stream", "Top K Frequent Elements", "Kth Largest Element in an Array", "Merge K Sorted Lists", "Implement Trie (Prefix Tree)", "Design Add and Search Words Data Structure", "Word Search II"],
    "Backtracking": ["Subsets", "Combination Sum", "Permutations", "Word Search", "Palindrome Partitioning", "N-Queens", "Letter Combinations of a Phone Number"],
    "Greedy & Intervals": ["Jump Game", "Gas Station", "Merge Intervals", "Insert Interval", "Non-overlapping Intervals", "Meeting Rooms", "Meeting Rooms II", "Maximum Units on a Truck"],
    "Bit Manipulation": ["Number of 1 Bits", "Counting Bits", "Reverse Bits", "Missing Number", "Sum of Two Integers", "Single Number"],
};

// --- Other Data (Study Plan, Platforms) ---
const studyPlan = [
    { week: "Week 1-2", focus: "Arrays, Strings & Pointers", hours: "15-20 hours" },
    { week: "Week 3-4", focus: "Linked Lists & Stacks/Queues", hours: "15-20 hours" },
    { week: "Week 5-6", focus: "Trees (BST, Traverals, Tries)", hours: "20-25 hours" },
    { week: "Week 7-8", focus: "Heaps & Backtracking", hours: "20-25 hours" },
    { week: "Week 9-10", focus: "Graphs (BFS, DFS, TopoSort)", hours: "25-30 hours" },
    { week: "Week 11-12", focus: "Dynamic Programming & Review", hours: "25-30 hours" },
];
const platforms = [
    { name: "LeetCode", description: "The gold standard for coding interview preparation.", url: "https://leetcode.com", rating: 4.8 },
    { name: "HackerRank", description: "Comprehensive challenges, tutorials, and company-specific tests.", url: "https://hackerrank.com", rating: 4.6 },
    { name: "GeeksforGeeks", description: "In-depth articles and a vast library of problems.", url: "https://geeksforgeeks.org", rating: 4.7 },
    { name: "NeetCode", description: "Curated problem lists and video solutions for key patterns.", url: "https://neetcode.io", rating: 4.9 },
];

const getDifficultyBadgeClass = (difficulty: string) => {
    switch (difficulty) {
        case "Easy": return 'bg-emerald-900/90 text-emerald-100 border border-emerald-600/50';
        case "Medium": return 'bg-amber-900/90 text-amber-100 border border-amber-600/50';
        case "Hard": return 'bg-red-900/90 text-red-100 border border-red-600/50';
        default: return 'bg-neutral-700 text-neutral-300 border border-neutral-600';
    }
};

const DSAPage = () => {
    const [showAllPrep, setShowAllPrep] = useState(false);
    const [showAllTop100, setShowAllTop100] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    
    const refs = {
        prep150: useRef<HTMLDivElement>(null),
        top100: useRef<HTMLDivElement>(null),
        faang: useRef<HTMLDivElement>(null),
        studyPlan: useRef<HTMLDivElement>(null),
        platforms: useRef<HTMLDivElement>(null),
        tips: useRef<HTMLDivElement>(null),
    };

    const handleNav = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showBackToTop && window.pageYOffset > 400) setShowBackToTop(true);
            else if (showBackToTop && window.pageYOffset <= 400) setShowBackToTop(false);
        };
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showBackToTop]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        { name: "150 Prep Questions", ref: refs.prep150 },
        { name: "Top 100 Curated", ref: refs.top100 },
        { name: "Top FAANG Questions", ref: refs.faang },
        { name: "12-Week Study Plan", ref: refs.studyPlan },
        { name: "Practice Platforms", ref: refs.platforms },
        { name: "Success Tips", ref: refs.tips },
    ];
    
    const Breadcrumb = () => (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="flex items-center gap-2 text-sm text-neutral-400">
                <Link to="/" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                    <Home className="w-4 h-4" />
                    Home
                </Link>
                <span>/</span>
                <span className="text-white font-medium">DSA</span>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans">
            {/* <Header /> */}
            <main className="flex-1 w-full pt-12 pb-16">
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Data Structures & Algorithms Hub
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
                        Your ultimate guide to acing technical interviews with curated resources and proven strategies.
                    </p>
                </div>
                
                <Breadcrumb />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
                    <aside className="hidden lg:block w-64 flex-shrink-0 mr-8">
                        <div className="sticky top-24 space-y-2">
                            <h3 className="font-semibold text-neutral-200 mb-2 px-3">On this page</h3>
                            {navLinks.map(link => (
                                <button
                                    key={link.name}
                                    onClick={() => handleNav(link.ref)}
                                    className="w-full text-left px-3 py-2 text-sm font-medium rounded-md text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </aside>

                    <main className="flex-1 min-w-0 space-y-20">
                        <section ref={refs.prep150} className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-white mb-4">150 Company Prep Questions</h2>
                            <p className="text-neutral-400 mb-6">A broad list of essential problems to build a strong, general foundation for technical interviews.</p>
                            <Card className="bg-neutral-900 border border-neutral-800 rounded-lg shadow-sm overflow-hidden">
                                <Table>
                                    <TableHeader className="hover:bg-neutral-800/50">
                                        <TableRow className="border-b-neutral-800">
                                            <TableHead className="w-16 text-white">#</TableHead>
                                            <TableHead className="text-white">Problem</TableHead>
                                            <TableHead className="text-white">Category</TableHead>
                                            <TableHead className="text-white">Difficulty</TableHead>
                                            <TableHead className="text-right text-white">Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {companyPrepQuestions.slice(0, showAllPrep ? 150 : 15).map(q => (
                                            <TableRow key={q.id} className="border-b-neutral-800 hover:bg-neutral-800/50">
                                                <TableCell className="font-mono text-neutral-500">{q.id}</TableCell>
                                                <TableCell className="font-semibold text-neutral-200">{q.title}</TableCell>
                                                <TableCell><Badge variant="outline" className="border-neutral-700 bg-neutral-800 text-neutral-300">{q.category}</Badge></TableCell>
                                                <TableCell><Badge className={`text-xs ${getDifficultyBadgeClass(q.difficulty)}`}>{q.difficulty}</Badge></TableCell>
                                                <TableCell className="text-right">
                                                    <Button asChild size="sm" variant="ghost" className="text-blue-400 hover:bg-neutral-700 hover:text-blue-300">
                                                        <a href={q.url} target="_blank" rel="noopener noreferrer">Solve <ExternalLink className="w-3.5 h-3.5 ml-2"/></a>
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                <div className="p-4 text-center border-t border-neutral-800">
                                     <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white" onClick={() => setShowAllPrep(!showAllPrep)}>
                                        {showAllPrep ? "Show Less" : `Show All ${companyPrepQuestions.length} Questions`}
                                        <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showAllPrep ? 'rotate-180' : ''}`} />
                                    </Button>
                                </div>
                            </Card>
                        </section>
                        
                        <section ref={refs.top100} className="scroll-mt-24">
                             <h2 className="text-2xl font-bold text-white mb-4">Top 100 Curated Questions</h2>
                            <p className="text-neutral-400 mb-6">A focused list of the highest-impact problems covering the most critical patterns for interviews.</p>
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                 {top100Questions.slice(0, showAllTop100 ? 100 : 12).map(q => (
                                     <Card key={q.id} className="bg-neutral-900 border border-neutral-800 rounded-lg flex flex-col justify-between p-4 hover:border-blue-500/50 transition-colors">
                                         <div>
                                             <div className="flex justify-between items-start mb-2">
                                                 <Badge className={`text-xs ${getDifficultyBadgeClass(q.difficulty)}`}>{q.difficulty}</Badge>
                                                 <span className="font-mono text-xs text-neutral-600">#{q.id}</span>
                                             </div>
                                             <h3 className="font-semibold text-neutral-200 mb-1">{q.title}</h3>
                                             <p className="text-xs text-neutral-500">{q.category}</p>
                                         </div>
                                         <Button asChild size="sm" variant="ghost" className="w-full mt-3 text-blue-400 hover:bg-neutral-800 hover:text-blue-300">
                                             <a href={q.url} target="_blank" rel="noopener noreferrer">Solve <ExternalLink className="w-3 h-3 ml-1.5"/></a>
                                         </Button>
                                     </Card>
                                 ))}
                             </div>
                             <div className="mt-6 text-center">
                                 <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white" onClick={() => setShowAllTop100(!showAllTop100)}>
                                     {showAllTop100 ? "Show Less" : `Show All ${top100Questions.length} Questions`}
                                     <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showAllTop100 ? 'rotate-180' : ''}`} />
                                 </Button>
                             </div>
                        </section>
                        
                        <section ref={refs.faang} className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-white mb-4">Top FAANG Questions by Category</h2>
                            <p className="text-neutral-400 mb-6">Master these core problems frequently asked at top-tier companies like Google, Meta, Amazon, and Apple.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {Object.entries(faangQuestions).map(([category, problems]) => (
                                    <Card key={category} className="bg-neutral-900 border border-neutral-800 rounded-lg shadow-sm">
                                        <CardHeader><CardTitle className="text-lg text-blue-400">{category}</CardTitle></CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 text-sm text-neutral-300">
                                                {problems.slice(0, 5).map(p => <li key={p} className="flex items-start"><CheckCircle className="w-4 h-4 mr-2.5 mt-0.5 text-blue-500 flex-shrink-0"/> {p}</li>)}
                                                {problems.length > 5 && <li className="text-neutral-500 ml-6">...and {problems.length - 5} more</li>}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        <section ref={refs.studyPlan} className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-white mb-4">12-Week Study Plan</h2>
                            <p className="text-neutral-400 mb-6">A structured plan to guide you from fundamentals to advanced topics in just three months.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {studyPlan.map((plan, index) => (
                                <Card key={index} className="bg-neutral-900 border border-neutral-800 rounded-lg shadow-sm p-6">
                                    <Badge className="mb-2 bg-blue-900/80 text-blue-200 border border-blue-600/50">{plan.week}</Badge>
                                    <h3 className="font-bold text-white mb-2">{plan.focus}</h3>
                                    <div className="flex items-center text-sm text-neutral-400"><Clock className="w-4 h-4 mr-2" /> {plan.hours}</div>
                                </Card>
                                ))}
                            </div>
                        </section>

                        <section ref={refs.platforms} className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-white mb-4">Practice Platforms</h2>
                            <p className="text-neutral-400 mb-6">The best websites to hone your coding skills and prepare for interviews.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {platforms.map((platform) => (
                                <Card key={platform.name} className="bg-neutral-900 border border-neutral-800 rounded-lg shadow-sm p-6 flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-lg text-white">{platform.name}</h3>
                                        <Badge variant="secondary" className="bg-yellow-900/80 text-yellow-200 border border-yellow-600/50 flex items-center gap-1">
                                            <Target className="w-3 h-3" /> {platform.rating}
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-neutral-400 mb-4 flex-grow">{platform.description}</p>
                                    <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                                        <a href={platform.url} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-2" /> Visit Platform</a>
                                    </Button>
                                </Card>
                                ))}
                            </div>
                        </section>

                        <section ref={refs.tips} className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-white mb-4">DSA Success Tips</h2>
                            <Card className="bg-neutral-900 border border-neutral-800 rounded-lg shadow-sm">
                                <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                    <div>
                                        <h4 className="font-semibold text-white mb-2">Study Strategy</h4>
                                        <ul className="space-y-2 text-sm text-neutral-400">
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-emerald-500 flex-shrink-0"/> Focus on understanding, not memorizing.</li>
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-emerald-500 flex-shrink-0"/> Practice consistently, even just one problem a day.</li>
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-emerald-500 flex-shrink-0"/> Review your solutions to find optimizations.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-2">Problem Solving</h4>
                                        <ul className="space-y-2 text-sm text-neutral-400">
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-emerald-500 flex-shrink-0"/> Always clarify the problem and constraints first.</li>
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-emerald-500 flex-shrink-0"/> Discuss your thought process out loud.</li>
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-emerald-500 flex-shrink-0"/> Analyze time and space complexity before coding.</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>
                    </main>
                </div>
            </main>

            {showBackToTop && (
                <Button 
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 h-12 w-12 rounded-full bg-blue-600/90 p-3 text-white shadow-lg transition-transform duration-200 ease-in-out hover:bg-blue-600 hover:scale-110"
                    aria-label="Go to top"
                >
                    <ArrowUp className="h-6 w-6" />
                </Button>
            )}

            {/* <Footer /> */}
        </div>
    );
};

export default DSAPage;
