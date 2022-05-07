const modules = {
  const: [
    ["OhMyMN", "ohmymn"],
    ["MagicAction for Card", "magicaction4card"],
    ["MagicAction for Text", "magicaction4text"]
  ],
  optional: [
    ["Gesture", "gesture"],
    ["Another AutoTitle", "anotherautotitle"],
    ["Another AutoDef", "anotherautodef"],
    ["AutoFormat", "autoformat"],
    ["AutoComplete", "autocomplete"],
    ["AutoReplace", "autoreplace"],
    ["AutoList", "autolist"],
    ["AutoTag", "autotag"],
    ["AutoStyle", "autostyle"],
    ["CopySearch", "copysearch"],
    ["AutoOCR", "autoocr"],
    ["AutoTranslate", "autotranslate"],
    ["Export to Flomo", "export2flomo"],
    ["Export to Anki", "export2anki"],
    ["Export to Devonthink", "export2devonthink"]
  ]
} as {
  const: [string, string][]
  optional: [string, string][]
}

export default modules
