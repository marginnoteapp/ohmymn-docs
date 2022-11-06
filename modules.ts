const modules = {
  const: [
    ["OhMyMN", "ohmymn"],
    ["MagicAction for Card", "magicaction4card"],
    ["MagicAction for Text", "magicaction4text"]
  ],
  optional: [
    ["Shortcut", "shortcut"],
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
    ["AutoTranslate", "autotranslate"],
    ["AutoOCR", "autoocr"],
    ["AutoComment", "autocomment"],
    ["AutoSimplify", "autosimplify"]
  ]
} as {
  const: [string, string][]
  optional: [string, string][]
}

export default modules