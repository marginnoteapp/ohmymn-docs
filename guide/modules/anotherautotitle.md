# Another AutoTitle

What kind of excerpts should be set as titles?

## Preset

::: tip
Only needs to meet one of the presets to automatically turn it into a title
:::

1. Word count: This is the easiest criterion to think of. When you have only two words in an excerpt, you naturally want to use this excerpt as a title. As long as it does not exceed the set number of words, it will automatically be turned into a title. If there are numbers or words in a Chinese sentence, they are not counted separately. A word or number will also occupy a Chinese character-like word count.
   - Chinese-character-like word count: Anything that is not made up of letters is Chinese.
   - English-word-like word count: That is, the number of words. Here I consider the Arabic number as a word as well.
2. Does not contain separating and terminal punctuation marks: Separatings are commas, dashes, semi-colons, and colons, and terminals are periods, exclamation points, and question marks, or in notation `。.、？?！!，,；;：:`.  If there is no punctuation mark indicating a pause, the excerpt is highly likely to be converted into a title.

## Custom

Use regular expressions to determine if the excerpted text meets the requirements, and turn it into a title if it does.

::: warning Input Format
[Regular expressions - Judgment](../custom.md#regular-expression)
:::

**Example**

For example, if you want the excerpt to be automatically converted to a title if it is in full Chinese with no punctuation and contains no more than 10 characters, you can write `/^[\u4e00-\u9fa5]{0,10}$/`.

## Title Excerpts Always as Titles

A title excerpt is an excerpt that has been automatically converted to a title. When this option is turned on and the selection corresponding to a title excerpt is modified, the excerpt will always be converted to a title, regardless of whether the preset conditions are met.
