# Basic Concepts

## Excerpt, Note, Card/Node, Comment

- Excerpt. Excerpt can be used as both a verb and a noun. It refers either to the process of selecting text or image from a document, color-coding it, and turning it into a mindmap card, or to the text/image itself. Here it refers specifically to excerpts from a document. Texts dragged form anywhere else, e.g. browser, are considered as comments.
- Note. Excerpts are actually notes. Each excerpt is assigned a `noteid`, which is also the URL of the card. 
- Card/Node. Node is used in the context of mindmaps, and it can also refer to the card itself. A card can contain excerpts, comments, tags, links, and many other components. One card can only have one excerpt in principle. 
- Comment. In fact, the tags and links described above are essentially comments. The characteristic of a comment is that it is not associated with a document. An excerpt, on the other hand, will have some properties related to the original document. One card can only have one excerpt in principle. However, when you merge two cards, the merged excerpt will become a comment in disguise. In OhMyMN, the merged excerpt is still considered as an excerpt. One thing about comments is that you can't edit them directly. You can only delete and re-add them. A lot of the processings for excerpts in OhMyMN are not compatible with comments.



## Card/Node, Parent/Child Card, Ancestor Card, Descendant Card

As mentioned before, cards are nodes and nodes are cards. In this documentation, the same concept may be referred to in one or the other form. If you have learned about data structures, you would know that one of a data structure is a tree. MN's mindmap is essentially a tree.

![](https://testmnbbs.oss-cn-zhangjiakou.aliyuncs.com/pic20220521005122.png?x-oss-process=base_webp)

(Translation for the image: the dark blue text is "selected card"; the light blue text is "descendant nodes"; and the green text is "child nodes")

The parent node is easy to understand. A parent node is the node directly before the current node. One node can only have one parent node and can have multiple child nodes.

Ancestor nodes are all the nodes before the current node, whether connected to it directly or indirectly, which includes the parent node of parent node, etc.

Descendant nodes are all the nodes behind the current node, whether connected to it directly or indirectly, which includes the child nodes of child nodes, etc.



## Title link, Combine titles

Title links are great for highlighting the title of a card in the document, and linking it back to the card. A card can have multiple titles via `;` or `;`. Each title will link to the card. One of the creative breakthroughs of OhMyMN is the automation of the process of generating titles and merging existing ones.