# OhMyMN

The options below are mainly for setting the properties of this panel and controlling other modules.

## Select Global Profile

::: tip
Only Current Document
:::

[Profile management](../profile.md) has mentioned the profile structure of OhMyMN, so I won't go over it here.

## Module Quick Switch

If a module is disabled or enabled, its options menu is no longer displayed after disabling it. Actions belonging to this module are also not displayed in MagicAction.

## Panel Position

::: tip Update
v4.1.0 Added: More panel positions. Supports automatic following the document width adjustment.
:::

- Inside the document: By default, the panel is displayed inside the document. Supports automatic following the document width adjustment.
- The middle between the document and the mindmap: The panel is displayed in the middle between the document and the mindmap. Supports automatic following the document width adjustment.
- Inside the mindmap: The panel is displayed inside the mindmap. 
- Aligned left
- Centered
- Aligned right

## Panel Height

Usually, with 12.9 inch iPad, you can choose `Higher` and with 11 inch ipad, you can still choose `Standard`. This way the input box at the bottom will not be covered by the keyboard.

## Panel Control

- Double-click the icon to open the panel: Double-click the smiley 😀 to open the panel so that you can avoid accidental touches.
- Double-click the panel to close it: Double-click anywhere on the control panel (not a button) to close the panel.
- Close the panel after action execution: The panel will be automatically closed after the action in MagicAction is executed.

## If the title exists

[Another AutoTitle](anotherautotitle.md), [Another AutoDef](anotherautodef.md), and [AutoComplete](autocomplete.md) all can convert excerpts to titles. If the title exists, use [drag-and-drop selection to merge](../tips.md#拖拽选择区) it into the card. If the 

If the conditions for automatic conversion to a title are met, there will be the following actions:

- Not converting to title.
- Merge titles: Use `; ` to merge titles, which can be used for title links.
- Override the current title.

### After the conversion to a title, the original excerpt will

After converting the excerpt to a title by the above operation, the original excerpt will be faced with three options:

- Immediately deleted.
- Deleted later: Deleted when the next excerpt is taken, when you exit the notebook or exit MN, or when MN enters the background. The reason for this is to retain the opportunity to adjust the excerpt selection.
- Not deleted.

## ~~Keep Screen ON~~

::: tip Update
v4.1.0 Deleted: split into a separate plugin. Click to download: [Keep Screen On](./anotherautodef.md)
:::

## Lock Excerpt Text

Once enabled, if you change the excerpt selection in the document by accident while swiping through the document, OhMyMN will restore the text in the excerpt for you. When you create an excerpt, you can keep modifying it as long as the excerpt menu does not disappear. Once the menu disappears, the excerpt will be locked. This feature can also first excerpt a long paragraph and then shorten the selection to one word.

## Auto Backup Profile

::: tip Update
v4.1.0 Improved: Directly set the URL of the backup card.
:::

::: warning Input
Card URL, such as `marginnote3app://note/F20F324D-61B3-4CA9-A64C-0C92645A1E33`
:::

Automatically saves the profile information to the MN's mindmap card. Again make sure that the card has child cards, as the profile information is written on the child cards. The more child cards, the better the performance is, as this profile information will keep expanding and we want to avoid exceeding the maximum number of words for a single card.