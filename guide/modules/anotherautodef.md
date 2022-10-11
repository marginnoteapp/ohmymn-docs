# Another AutoDef

The difference between this function and [Another AutoTitle](anotherautotitle.md) is that Another AutoTitle is mainly used to convert excerpts to titles, while Another AutoDef uses part of the excerpt as the title and the remaining content as the excerpt, which plays a splitting and extracting role.

As for why it is called AutoDef, it is because this function is most often used for definition.

::: tip Wikipedia: the definition of "definition"
The word or group of words that is to be defined is called the definiendum, and the word, group of words, or action that defines it is called the definiens. For example, in the definition "An elephant is a large gray animal native to Asia and Africa", the word "elephant" is the definiendum, and everything after the word "is" is the definiens.
:::

This definition connective can either be used as a splitting point to divide content into two parts, the title and the excerpt, or it can be used to determine whether the excerpt is a definition or not, so that it can be processed automatically.

## Preset

I have set up a few commonly seen connectives. It will be restrained to avoid affecting the normal excerpting behavior. `xxx` is the definiendum and `yyy` is the definiens.

Note: some regex contain/are designed for Chinese text

- xxx : yyy `/[：:]/`
- xxx —— yyy `/[一\-—]{1,2}/`
- xxx ，是(指) yyy `/[,，]\s*(?:通常|一般)*是指?/`
- xxx 是(指)， yyy `/(?:通常|一般)*是指?\s*[,，]/`
- xxx 是指 yyy `/(?:通常|一般)*是指/`
- yyy，\_\_\_称(之)为 xxx `/[,，].*称之?为/y`
- yyy(被)称(之)为 xxx `/(?:通常|一般)?被?称之?为/y`

The default is to turn on `Extracts Only Keep Definiendum`, which means that the definiendum is used as the title and the definiens are used as the extract. If disabled, only the definiendum will be used as the title, and the excerpt content will remain unchanged, which is equivalent to only extracting the title.


## Custom Connective

::: warning Custom formats
[Regular Expression —— Split](../custom.md#regular-expression)

`v4.1.0` Improvement: If an array of regular expressions is used, the first regex in the array is used as the splitting point and the rest of the regulars are used as constraints for that point.
:::

I've written the regular expressions behind the above presets clearly, and you can customize the connectives you need. Here's how it works: [split function](... /split.md), which uses the connective as a splitting point, and naturally divides the definition into the definiendum and the definiens.

As you may have noticed, the last two rules in the presets use a flag `y`, and they both belong to the case where the definiendum comes after it. `y` is rarely used in the regular, so I've included it as a parameter. Whenever you use`y`, AutoDef will automatically swap the definiendum and definiens.

## Custom Synonym Connective

Defined items usually have synonyms in them, and if you turn on the `Synonyms to Multiple Titles` option, AutoDef will automatically split them into multiple titles to be used for title links. `Custom Extracted Titles` will not be split.

Default word splitting strategies:

- Default: `/或者?|[简又]?称(?:之?为)?/`
- Punctuation Marks: `/[、。,，‘’“”"『』()（）【】「」《》«»\/\[\]]/`

::: warning Custom Formats
[Regular Expression —— Split](../custom.md#regular-expression)

`v4.1.0` Improvement: If an array of regular expressions is used, the first regex in the array is used as the splitting point and the rest of the regulars are used as constraints for that point.
:::

## Custom Titles Extraction

::: warning Custom Formats
[replace() Function Format —— Extract](../custom.md#replace-function)
:::

Extract the title directly from the excerpt.

The third parameter of this format `fnKey` is used here.

- The default is 0, which can be omitted, meaning that the excerpt content is retained. However, if you enter 1, the excerpt content will not be retained.

## [MagicAction for Card](magicaction4card.md#extract-title)

### Extract Title

::: warning Custom Formats
[replace() Function Format —— Extract](../custom.md#replace-function)
:::

- `Use the Configuration of AutoDef`: uses the custom regex entered in `Custom Title Extraction`.

`v4.1.0`Improvement:  If the card already has a title, it will be automatically merged.

### Split Excerpt Text

::: tip Update
`v4.1.0` New feature
:::

::: warning Custom Formats
[Regular Expression —— Split](../custom.md#regular-expression)
:::

- `Use the Configuration of AutoDef`: Split using the presets in AutoDef, excluding `Custom Title Extraction`.

If the card already has a title, it will be automatically merged.
