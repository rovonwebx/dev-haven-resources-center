import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Brain, Clock, CheckCircle, ExternalLink, Star, Code, Target, Building2 } from "lucide-react";

const DSA = () => {
  const companyPrepQuestions = [
    // Beginner Level (1-20)
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
    
    // Intermediate Level (39-106)
    { id: 39, title: "Group Anagrams", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/group-anagrams/" },
    { id: 40, title: "Longest Substring Without Repeating Characters", category: "Sliding Window", difficulty: "Medium", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
    { id: 41, title: "Evaluate Reverse Polish Notation", category: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
    { id: 42, title: "Koko Eating Bananas", category: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/koko-eating-bananas/" },
    { id: 43, title: "Reorder List", category: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/reorder-list/" },
    { id: 44, title: "Subtree of Another Tree", category: "Trees", difficulty: "Easy", url: "https://leetcode.com/problems/subtree-of-another-tree/" },
    { id: 45, title: "K Closest Points to Origin", category: "Priority Queue", difficulty: "Medium", url: "https://leetcode.com/problems/k-closest-points-to-origin/" },
    { id: 46, title: "Combination Sum", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum/" },
    { id: 47, title: "Permutations", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/permutations/" },
    { id: 48, title: "Letter Combinations of a Phone Number", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
    { id: 49, title: "Number of Islands", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-islands/" },
    { id: 50, title: "Walls And Gates", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/walls-and-gates/" },
    { id: 51, title: "Rotting Oranges", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/rotting-oranges/" },
    { id: 52, title: "Longest Palindromic Substring", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/longest-palindromic-substring/" },
    { id: 53, title: "Longest Common Subsequence", category: "2-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/longest-common-subsequence/" },
    { id: 54, title: "Gas Station", category: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/gas-station/" },
    { id: 55, title: "Merge Intervals", category: "Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/merge-intervals/" },
    { id: 56, title: "Spiral Matrix", category: "Math", difficulty: "Medium", url: "https://leetcode.com/problems/spiral-matrix/" },
    { id: 57, title: "Reverse Bits", category: "Bit Manipulation", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-bits/" },
    { id: 58, title: "Reverse Integer", category: "Bit Manipulation", difficulty: "Medium", url: "https://leetcode.com/problems/reverse-integer/" },
    { id: 59, title: "Top K Frequent Elements", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
    { id: 60, title: "Generate Parentheses", category: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/generate-parentheses/" },
    { id: 61, title: "Find Minimum in Rotated Sorted Array", category: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
    { id: 62, title: "Remove Nth Node From End of List", category: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
    { id: 63, title: "Lowest Common Ancestor of a Binary Search Tree", category: "Trees", difficulty: "Medium", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
    { id: 64, title: "Kth Largest Element in an Array", category: "Priority Queue", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
    { id: 65, title: "Combination Sum II", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum-ii/" },
    { id: 66, title: "Subsets II", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/subsets-ii/" },
    { id: 67, title: "Surrounded Regions", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/surrounded-regions/" },
    { id: 68, title: "Palindromic Substrings", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/palindromic-substrings/" },
    { id: 69, title: "Best Time to Buy and Sell Stock With Cooldown", category: "2-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/" },
    
    // Advanced Level (74-106)
    { id: 74, title: "Encode and Decode Strings", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/encode-and-decode-strings/" },
    { id: 75, title: "3Sum", category: "Two Pointers", difficulty: "Medium", url: "https://leetcode.com/problems/3sum/" },
    { id: 76, title: "Longest Repeating Character Replacement", category: "Sliding Window", difficulty: "Medium", url: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
    { id: 77, title: "Daily Temperatures", category: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/daily-temperatures/" },
    { id: 78, title: "Search in Rotated Sorted Array", category: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
    { id: 79, title: "Copy List With Random Pointer", category: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
    { id: 80, title: "Binary Tree Level Order Traversal", category: "Trees", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
    { id: 81, title: "Task Scheduler", category: "Priority Queue", difficulty: "Medium", url: "https://leetcode.com/problems/task-scheduler/" },
    { id: 82, title: "Word Search", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/word-search/" },
    { id: 83, title: "Implement Trie (Prefix Tree)", category: "Tries", difficulty: "Medium", url: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
    { id: 84, title: "Clone Graph", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/clone-graph/" },
    { id: 85, title: "Decode Ways", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/decode-ways/" },
    { id: 86, title: "Coin Change II", category: "2-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/coin-change-ii/" },
    { id: 87, title: "Hand of Straights", category: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/hand-of-straights/" },
    { id: 88, title: "Non Overlapping Intervals", category: "Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/non-overlapping-intervals/" },
    { id: 89, title: "Meeting Rooms II", category: "Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/meeting-rooms-ii/" },
    { id: 90, title: "Product of Array Except Self", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/product-of-array-except-self/" },
    { id: 91, title: "Container With Most Water", category: "Two Pointers", difficulty: "Medium", url: "https://leetcode.com/problems/container-with-most-water/" },
    { id: 92, title: "Permutation in String", category: "Sliding Window", difficulty: "Medium", url: "https://leetcode.com/problems/permutation-in-string/" },
    { id: 93, title: "Add Two Numbers", category: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/add-two-numbers/" },
    { id: 94, title: "Binary Tree Right Side View", category: "Trees", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-right-side-view/" },
    { id: 95, title: "Palindrome Partitioning", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/palindrome-partitioning/" },
    { id: 96, title: "Pacific Atlantic Water Flow", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
    { id: 97, title: "Coin Change", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/coin-change/" },
    { id: 98, title: "Target Sum", category: "2-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/target-sum/" },
    { id: 99, title: "Merge Triplets to Form Target Triplet", category: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/" },
    { id: 100, title: "Multiply Strings", category: "Math", difficulty: "Medium", url: "https://leetcode.com/problems/multiply-strings/" },
    { id: 101, title: "Valid Sudoku", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/valid-sudoku/" },
    { id: 102, title: "Minimum Window Substring", category: "Sliding Window", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-window-substring/" },
    { id: 103, title: "Car Fleet", category: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/car-fleet/" },
    { id: 104, title: "Time Based Key Value Store", category: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/time-based-key-value-store/" },
    { id: 105, title: "Find The Duplicate Number", category: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/find-the-duplicate-number/" },
    { id: 106, title: "Count Good Nodes in Binary Tree", category: "Trees", difficulty: "Medium", url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/" },
    
    // Expert Level (128-150)
    { id: 128, title: "Longest Consecutive Sequence", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
    { id: 129, title: "Trapping Rain Water", category: "Two Pointers", difficulty: "Hard", url: "https://leetcode.com/problems/trapping-rain-water/" },
    { id: 130, title: "Largest Rectangle In Histogram", category: "Stack", difficulty: "Hard", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
    { id: 131, title: "Median of Two Sorted Arrays", category: "Binary Search", difficulty: "Hard", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
    { id: 132, title: "Merge K Sorted Lists", category: "Linked List", difficulty: "Hard", url: "https://leetcode.com/problems/merge-k-sorted-lists/" },
    { id: 133, title: "Construct Binary Tree From Preorder And Inorder Traversal", category: "Trees", difficulty: "Medium", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
    { id: 134, title: "Find Median From Data Stream", category: "Priority Queue", difficulty: "Hard", url: "https://leetcode.com/problems/find-median-from-data-stream/" },
    { id: 135, title: "N Queens", category: "Backtracking", difficulty: "Hard", url: "https://leetcode.com/problems/n-queens/" },
    { id: 136, title: "Word Search II", category: "Tries", difficulty: "Hard", url: "https://leetcode.com/problems/word-search-ii/" },
    { id: 137, title: "Word Ladder", category: "Graphs", difficulty: "Hard", url: "https://leetcode.com/problems/word-ladder/" },
    { id: 138, title: "Reconstruct Itinerary", category: "Advanced Graphs", difficulty: "Hard", url: "https://leetcode.com/problems/reconstruct-itinerary/" },
    { id: 139, title: "Partition Equal Subset Sum", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
    { id: 140, title: "Distinct Subsequences", category: "2-D DP", difficulty: "Hard", url: "https://leetcode.com/problems/distinct-subsequences/" },
    { id: 141, title: "Edit Distance", category: "2-D DP", difficulty: "Hard", url: "https://leetcode.com/problems/edit-distance/" },
    { id: 142, title: "Reverse Nodes In K Group", category: "Linked List", difficulty: "Hard", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
    { id: 143, title: "Binary Tree Maximum Path Sum", category: "Trees", difficulty: "Hard", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
    { id: 144, title: "Min Cost to Connect All Points", category: "Advanced Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/min-cost-to-connect-all-points/" },
    { id: 145, title: "Cheapest Flights Within K Stops", category: "Advanced Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
    { id: 146, title: "Burst Balloons", category: "2-D DP", difficulty: "Hard", url: "https://leetcode.com/problems/burst-balloons/" },
    { id: 147, title: "Serialize And Deserialize Binary Tree", category: "Trees", difficulty: "Hard", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
    { id: 148, title: "Swim In Rising Water", category: "Advanced Graphs", difficulty: "Hard", url: "https://leetcode.com/problems/swim-in-rising-water/" },
    { id: 149, title: "Alien Dictionary", category: "Advanced Graphs", difficulty: "Hard", url: "https://leetcode.com/problems/alien-dictionary/" },
    { id: 150, title: "Regular Expression Matching", category: "2-D DP", difficulty: "Hard", url: "https://leetcode.com/problems/regular-expression-matching/" }
  ];

  const topQuestions = {
    "Easy": [
      {
        title: "Two Sum",
        platform: "LeetCode",
        difficulty: "Easy",
        category: "Array",
        acceptance: "49.5%",
        url: "https://leetcode.com/problems/two-sum/",
        description: "Find two numbers that add up to a target sum"
      },
      {
        title: "Valid Parentheses",
        platform: "LeetCode",
        difficulty: "Easy",
        category: "Stack",
        acceptance: "40.8%",
        url: "https://leetcode.com/problems/valid-parentheses/",
        description: "Check if parentheses are properly matched"
      },
      {
        title: "Merge Two Sorted Lists",
        platform: "LeetCode",
        difficulty: "Easy",
        category: "Linked List",
        acceptance: "61.9%",
        url: "https://leetcode.com/problems/merge-two-sorted-lists/",
        description: "Merge two sorted linked lists into one"
      },
      {
        title: "Binary Tree Inorder Traversal",
        platform: "LeetCode",
        difficulty: "Easy",
        category: "Tree",
        acceptance: "74.6%",
        url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        description: "Traverse binary tree in inorder"
      },
      {
        title: "Maximum Subarray",
        platform: "LeetCode",
        difficulty: "Easy",
        category: "Dynamic Programming",
        acceptance: "49.9%",
        url: "https://leetcode.com/problems/maximum-subarray/",
        description: "Find contiguous subarray with largest sum"
      }
    ],
    "Medium": [
      {
        title: "3Sum",
        platform: "LeetCode",
        difficulty: "Medium",
        category: "Array",
        acceptance: "32.9%",
        url: "https://leetcode.com/problems/3sum/",
        description: "Find all unique triplets that sum to zero"
      },
      {
        title: "Longest Substring Without Repeating Characters",
        platform: "LeetCode",
        difficulty: "Medium",
        category: "String",
        acceptance: "33.8%",
        url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        description: "Find length of longest substring without repeating characters"
      },
      {
        title: "Add Two Numbers",
        platform: "LeetCode",
        difficulty: "Medium",
        category: "Linked List",
        acceptance: "38.1%",
        url: "https://leetcode.com/problems/add-two-numbers/",
        description: "Add two numbers represented as linked lists"
      },
      {
        title: "Binary Tree Level Order Traversal",
        platform: "LeetCode",
        difficulty: "Medium",
        category: "Tree",
        acceptance: "64.2%",
        url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        description: "Traverse binary tree level by level"
      },
      {
        title: "Coin Change",
        platform: "LeetCode",
        difficulty: "Medium",
        category: "Dynamic Programming",
        acceptance: "41.3%",
        url: "https://leetcode.com/problems/coin-change/",
        description: "Find minimum coins needed for amount"
      },
      {
        title: "Number of Islands",
        platform: "LeetCode",
        difficulty: "Medium",
        category: "Graph",
        acceptance: "56.8%",
        url: "https://leetcode.com/problems/number-of-islands/",
        description: "Count number of islands in 2D grid"
      }
    ],
    "Hard": [
      {
        title: "Median of Two Sorted Arrays",
        platform: "LeetCode",
        difficulty: "Hard",
        category: "Array",
        acceptance: "37.5%",
        url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        description: "Find median of two sorted arrays in O(log(m+n))"
      },
      {
        title: "Trapping Rain Water",
        platform: "LeetCode",
        difficulty: "Hard",
        category: "Array",
        acceptance: "58.7%",
        url: "https://leetcode.com/problems/trapping-rain-water/",
        description: "Calculate trapped rainwater between bars"
      },
      {
        title: "Merge k Sorted Lists",
        platform: "LeetCode",
        difficulty: "Hard",
        category: "Linked List",
        acceptance: "48.9%",
        url: "https://leetcode.com/problems/merge-k-sorted-lists/",
        description: "Merge k sorted linked lists"
      },
      {
        title: "Binary Tree Maximum Path Sum",
        platform: "LeetCode",
        difficulty: "Hard",
        category: "Tree",
        acceptance: "38.2%",
        url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        description: "Find maximum path sum in binary tree"
      },
      {
        title: "Edit Distance",
        platform: "LeetCode",
        difficulty: "Hard",
        category: "Dynamic Programming",
        acceptance: "54.1%",
        url: "https://leetcode.com/problems/edit-distance/",
        description: "Minimum operations to convert one string to another"
      }
    ]
  };

  const studyPlan = [
    { week: "Week 1-2", focus: "Arrays, Strings, and Basic Patterns", hours: "2-3 hours/day" },
    { week: "Week 3-4", focus: "Linked Lists and Stacks/Queues", hours: "2-3 hours/day" },
    { week: "Week 5-6", focus: "Trees and Basic Graph Algorithms", hours: "3-4 hours/day" },
    { week: "Week 7-8", focus: "Advanced Data Structures", hours: "3-4 hours/day" },
    { week: "Week 9-10", focus: "Dynamic Programming", hours: "4-5 hours/day" },
    { week: "Week 11-12", focus: "Advanced Algorithms & System Design", hours: "4-5 hours/day" }
  ];

  const platforms = [
    {
      name: "LeetCode",
      description: "Most popular coding interview preparation platform",
      problems: "3000+",
      url: "https://leetcode.com",
      rating: 4.8
    },
    {
      name: "HackerRank",
      description: "Comprehensive programming challenges and tutorials",
      problems: "2500+",
      url: "https://hackerrank.com",
      rating: 4.6
    },
    {
      name: "GeeksforGeeks",
      description: "Detailed explanations and implementations",
      problems: "5000+",
      url: "https://geeksforgeeks.org",
      rating: 4.7
    },
    {
      name: "CodeChef",
      description: "Competitive programming practice problems",
      problems: "4000+",
      url: "https://codechef.com",
      rating: 4.5
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="w-6 h-6 text-gray-600" />
              <h1 className="text-2xl font-serif text-black">Data Structures & Algorithms</h1>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                Back to Hub
                <ArrowLeft className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <p className="text-gray-600 text-sm mt-2">Master the fundamentals of computer science</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Company Prep DSA Questions */}
        <div className="mb-12">
          <h2 className="text-xl font-serif text-black mb-6 pb-2 border-b border-gray-300 flex items-center">
            <Building2 className="w-5 h-5 mr-2 text-gray-600" />
            Company Prep DSA Questions
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Comprehensive collection of DSA problems frequently asked in top tech company interviews. 
            Questions are organized by difficulty level and cover all major topics.
          </p>
          
          <Card className="border border-gray-200 mb-6">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">#</TableHead>
                    <TableHead>Problem</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Difficulty</TableHead>
                    <TableHead className="w-20">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {companyPrepQuestions.map((question) => (
                    <TableRow key={question.id}>
                      <TableCell className="font-medium text-gray-600">{question.id}</TableCell>
                      <TableCell>
                        <div className="font-medium text-gray-900 hover:text-blue-600">
                          <a href={question.url} target="_blank" rel="noopener noreferrer">
                            {question.title}
                          </a>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {question.category}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getDifficultyColor(question.difficulty)}>
                          {question.difficulty}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline" asChild>
                          <a href={question.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Solve
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <div className="text-xs text-gray-500 mb-8">
            <p>Source: The Ultimate DSA Sheet - Compiled June 27, 2025</p>
            <p>Original reference: <a href="https://whimsical.com/the-ultimate-dsa-sheet-TPhe4bp97NYELVxX9ooD3N" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ultimate DSA Sheet</a></p>
          </div>
        </div>

        {/* Top Questions by Difficulty */}
        <div className="mb-12">
          <h2 className="text-xl font-serif text-black mb-6 pb-2 border-b border-gray-300">Top Practice Questions</h2>
          
          {Object.entries(topQuestions).map(([difficulty, questions]) => (
            <div key={difficulty} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-gray-600" />
                {difficulty} Level
              </h3>
              <div className="grid gap-4">
                {questions.map((question, index) => (
                  <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-medium text-gray-900 hover:text-blue-600">
                              <a href={question.url} target="_blank" rel="noopener noreferrer">
                                {question.title}
                              </a>
                            </h4>
                            <Badge className={getDifficultyColor(question.difficulty)}>
                              {question.difficulty}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {question.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{question.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>Platform: {question.platform}</span>
                            <span>Acceptance: {question.acceptance}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <a href={question.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Solve
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Study Plan */}
        <div className="mb-12">
          <h2 className="text-xl font-serif text-black mb-6 pb-2 border-b border-gray-300">12-Week Study Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {studyPlan.map((plan, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="font-medium text-gray-900">{plan.week}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">{plan.focus}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {plan.hours}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Practice Platforms */}
        <div className="mb-12">
          <h2 className="text-xl font-serif text-black mb-6 pb-2 border-b border-gray-300">Practice Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-gray-900">{platform.name}</CardTitle>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      <span className="text-sm font-medium">{platform.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{platform.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 text-sm text-gray-600">
                    Problems: <strong>{platform.problems}</strong>
                  </div>
                  <Button className="w-full" variant="outline" asChild>
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      <Code className="w-4 h-4 mr-2" />
                      Start Practicing
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">DSA Success Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3 text-gray-900">Study Strategy</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Focus on understanding, not memorizing</li>
                  <li>• Practice regularly and consistently</li>
                  <li>• Start with easy problems, progress gradually</li>
                  <li>• Implement algorithms from scratch</li>
                  <li>• Review and optimize your solutions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-gray-900">Problem Solving</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Break down complex problems</li>
                  <li>• Think about time and space complexity</li>
                  <li>• Practice explaining your solutions</li>
                  <li>• Learn from different approaches</li>
                  <li>• Join study groups and discussions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DSA;
