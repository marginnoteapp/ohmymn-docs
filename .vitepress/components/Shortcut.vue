<script lang="ts" setup>
import { darkTheme } from 'naive-ui'
import { useData } from "vitepress"
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'

const { isDark } = useData()
const darkPrimary = "rgba(255, 197, 23, 0.25)"
const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: darkPrimary,
    primaryColorHover: darkPrimary,
  },
  Cascader: {
    menuColor: "#2f2f2f",
    menuBorderRadius: "8px",
  },
  Button: {
    colorHover: darkPrimary,
    borderPressed: darkPrimary,
  },
  Tooltip: {
    color: "#2f2f2f",
  },
}
const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: darkPrimary,
    primaryColorHover: darkPrimary,
  },
  Cascader: {
    menuBorderRadius: "8px",
  },
  Button: {
    colorHover: darkPrimary,
    borderPressed: darkPrimary,
  },
  Tooltip: {
    color: darkPrimary,
    textColor: "2f2f2f",
  },
}



const cardActions = [{
  key: "manageProfile",
  type: 2,
  label: "Manage Profile",
  option: [
    "Read Profile",
    "Write Profile",
    "Reset Profile",
    "Sync Profile with Other Windows"
  ],
  help: "Please make sure that the card has at least one child card when writing the profile. Multiple child cards can share the profile together to prevent a single card from having too many words.",
  module: "magicaction4card",
  moduleName: "MagicAction For Card"
},
{
  type: 3,
  label: "Filter Cards",
  option: ["All", "Title", "Excerpt", "Comment", "Tag"],
  key: "filterCard",
  module: "magicaction4card",
  moduleName: "MagicAction For Card"
},
{
  type: 2,
  label: "Merge Multiple Cards",
  key: "mergeCard",
  option: ["Merge Title", "Not Merge Titles"],
  module: "magicaction4card",
  moduleName: "MagicAction For Card"
},
{
  type: 3,
  label: "Rename Titles",
  key: "renameTitle",
  help: "$& refers to the original title. Enter \"%['1'] $&\" to Quickly number the selected card title.",
  module: "magicaction4card",
  moduleName: "MagicAction For Card"
},
{
  type: 2,
  label: "Merge Text",
  key: "mergeText",
  option: ["Merged as Excerpt", "Merged as Comment"],
  help: "Only support merging text excerpt and text comment, not merging tags and link, other content will be pinned after merging",
  module: "magicaction4card",
  moduleName: "MagicAction For Card"
},
{
  key: "switchTitle",
  type: 2,
  label: "Switch Excerption or Title",
  option: ["Switch to Non-Existent", "Swap Title and Excerpt"],
  help: "Use [Swap Title and Excerpt] when both are present」",
  module: "magicaction4card",
  moduleName: "MagicAction For Card"
},
{
  type: 3,
  label: "Extract Title",
  option: ["Use AutoDef Settings", "Confirm"],
  key: "extractTitle",
  moduleName: "Another AutoDef",
  module: "anotherautodef",
  help: "This action comes from Another AutoDef and uses the same settings. "
},
{
  type: 3,
  label: "Split Excerpt Text",
  key: "splitExcerpt",
  option: ["Use AutoDef Settings", "Confirm"],
  help: "This action comes from Another AutoDef and uses the same settings. Split the excerpt into title (definiendum) and excerpt (definiens) parts.",
  moduleName: "Another AutoDef",
  module: "anotherautodef"
},
{
  key: "formatCard",
  type: 2,
  label: "Format Excerpt Text",
  option: ["All", "Only Title", "Only Excerpt Text"],
  moduleName: "AutoFormat",
  module: "autoformat",
  help: "This action comes from AutoFormat and uses the same settings. "
},
{
  key: "completeWord",
  type: 2,
  label: "Generate Word Card",
  option: ["Append", "Replace"],
  moduleName: "AutoComplete",
  module: "autocomplete",
  help: "This action comes from AutoComplete and uses the same settings. "
},
{
  type: 3,
  label: "Replace Excerpt Text",
  key: "replaceCard",
  option: ["Use AutoReplace Settings", "Confirm"],
  moduleName: "AutoReplace",
  module: "autoreplace",
  help: "This action comes from AutoReplace and uses the same settings. "
},
{
  type: 3,
  label: "Add Line Breaks",
  key: "listCard",
  option: ["Use AutoList Settings", "Confirm"],
  moduleName: "AutoList",
  module: "autolist",
  help: "This action comes from AutoList and uses the same settings. "
},
{
  type: 3,
  label: "Add Tags",
  key: "addTag",
  option: ["Use AutoTag Settings", "Confirm"],
  moduleName: "AutoTag",
  module: "autotag",
  help: "This action comes from AutoTag and uses the same settings. "
},
{
  type: 3,
  label: "Modify Excerpt Color",
  key: "changeColor",
  option: ["Use AutoStyle Settings", "Confirm"],
  help: "This action comes from AutoStyle and uses the same settings. Enter the color index, 1 to 16",
  moduleName: "AutoStyle",
  module: "autostyle"
},
{
  type: 2,
  label: "Modify Excerpt Style",
  key: "changeStyle",
  option: ["Use AutoStyle Settings", "Outline+Fill", "Fill", "Outline"],
  moduleName: "AutoStyle",
  module: "autostyle",
  help: "This action comes from AutoStyle and uses the same settings. "
},
{
  type: 2,
  key: "searchCardInfo",
  label: "Search Card Content",
  option: [
    "Chinese",
    "English",
    "Dict",
    "Translation",
    "Academic",
    "Question",
    "Other"
  ],
  moduleName: "CopySearch",
  module: "copysearch",
  help: "This action comes from CopySearch and uses the same settings. "
},
{
  type: 2,
  key: "copyCardInfo",
  label: "Copy Card Content",
  option: ["Dynamic Selection", "Title First", "Excerpt First", "Custom"],
  moduleName: "CopySearch",
  module: "copysearch",
  help: "This action comes from CopySearch and uses the same settings. "
},
{
  key: "translateCard",
  type: 2,
  label: "Translate Excerpt Text",
  help: "This action comes from AutoTranslate and uses the same settings. Translate all excerpts in the card, note that too many translations at the same time may cause the translation to fail.",
  moduleName: "AutoTranslate",
  module: "autotranslate"
},
{
  type: 3,
  label: "Add Comment",
  key: "addComment",
  option: ["Use AutoComment Settings", "Confirm"],
  moduleName: "AutoComment",
  module: "autocomment",
  help: "This action comes from AutoComment and uses the same settings. "
},
{
  type: 2,
  label: "Convert to Simplified Chinese",
  key: "simplifyCard",
  option: ["Excerpt and Title", "Only Excerpt", "Only Title"],
  moduleName: "AutoSimplify",
  module: "autosimplify",
  help: "This action comes from AutoSimplify and uses the same settings. "
}
]
const textActions = [
  {
    type: 2,
    key: "copyText",
    label: "Copy Selected Text",
    module: "magicaction4text",
    moduleName: "MagicAction For Text"
  },
  {
    type: 2,
    key: "searchText",
    label: "Search Selected Text",
    option: [
      "Chinese",
      "English",
      "Dict",
      "Translation",
      "Academic",
      "Question",
      "Other"
    ],
    moduleName: "CopySearch",
    module: "copysearch",
    help: "This action comes from CopySearch and uses the same settings. "
  },
  {
    type: 2,
    key: "formulaOCR",
    label: "Formula OCR",
    option: ["Pure Latex", "$ Latex $", "$$ Latex $$"],
    help: 'This action comes from AutoOCR and uses the same settings. For "Markdown" Addon, please choose Pure Latex',
    moduleName: "AutoOCR",
    module: "autoocr"
  },
  {
    type: 2,
    key: "textOCR",
    label: "Text OCR",
    moduleName: "AutoOCR",
    module: "autoocr",
    help: "This action comes from AutoOCR and uses the same settings. "
  },
  {
    type: 2,
    key: "handWrittingOCR",
    label: "Handwritting OCR",
    moduleName: "AutoOCR",
    module: "autoocr",
    help: "This action comes from AutoOCR and uses the same settings. "
  },
  {
    type: 2,
    key: "QRCodeOCR",
    label: "QRCode OCR",
    moduleName: "AutoOCR",
    module: "autoocr",
    help: "This action comes from AutoOCR and uses the same settings. "
  },
  {
    key: "translateText",
    type: 2,
    label: "Translate Selected Text",
    moduleName: "AutoTranslate",
    module: "autotranslate",
    help: "This action comes from AutoTranslate and uses the same settings. "
  },
  {
    type: 2,
    label: "Convert to Simplified Chinese",
    key: "simplifyText",
    moduleName: "AutoSimplify",
    module: "autosimplify",
    help: "This action comes from AutoSimplify and uses the same settings. "
  }
]


const options = [
  {
    value: 'card',
    label: 'Card Actions',
    children: cardActions
  },
  {
    value: 'text',
    label: 'Text Action',
    children: textActions
  }
].map((h) => {
  return {
    ...h,
    children: h.children.map(k => {
      if (!k?.option?.length)
        k.option = ["Confirm"]
      return {
        value: k.key,
        label: k.module === "magicaction4card" || k.module === "magicaction4text" ? k.label : `${k.label}(${k.moduleName})`,
        children: k.option.map((o, i) => {
          return {
            value: `${h.value}-${k.type === 3 && !/Use.*Settings/.test(o)}-${k.key}-${i}`,
            label: o,
          }
        }
        )
      }
    })
  }
})

const selections = reactive<{
  action: string
  type: "text" | "card"
  label: string
  option: string
  input?: boolean
  content?: string
}[]>([])

const content = ref<string>("")

const result = reactive({
  show: false,
  content: ""
})

const error = ref(false)
const handleSelect = (valList: string[], _: any, pathList: { label: string }[][]) => {
  selections.length = 0
  if (valList.length) {
    valList.forEach((k, i) => {
      const [type, input, action, option] = k.split('-')
      console.log(input)
      selections.push({
        type: type as "text" | "card",
        input: input === "true",
        label: pathList[i].map(k => k.label).join(' / '),
        action,
        option
      })
    })
  }
  error.value = new Set(selections.map(k => k.type)).size === 2
  result.show = false
  result.content = ""
  content.value = ""
}

const generate = () => {
  result.show = true
  const params = new URLSearchParams()

  params.append("info", JSON.stringify(
    selections.map(k => {
      if (k.input && k.content)
        return {
          action: k.action,
          type: k.type,
          option: k.option,
          content: k.content.replace(/\n/g, "\\n"),
        }
      else return {
        action: k.action,
        type: k.type,
        option: k.option,
      }
    })
  ))

  result.content = `marginnote3app://addon/ohmymn?custom=true&${params.toString()}`
}

const copy = () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(result.content);
  }
}

</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : undefined"
    :theme-overrides="isDark ? darkThemeOverrides : lightThemeOverrides">
    <div class="my-2">
      <div class="flex">
        <n-space vertical class="flex-grow">
          <n-cascader placeholder="Please Select A Action" :expand-trigger="'hover'" :options="options"
            @update:value="handleSelect" :check-strategy="'child'" size="small" clearable multiple :cascade="false"
            :status="error ? 'error' : 'success'" />
          <n-input v-if="!error" v-for="param in selections.filter(k => k.input)" v-model:value="param.content"
            type="textarea" :placeholder="`「${param.label}」Need Input`" autosize clearable size="small" />
        </n-space>
        <n-button :text-color="isDark ? '#fff' : '#000'" @click="generate" size="small"
          :disabled="selections.length === 0 || error || !!selections.find(k => k.input && !k.content)" class="!ml-4">
          Generate
        </n-button>
      </div>
      <p />
      <div class="flex" v-if="result.show && result.content">
        <n-input v-model:value="result.content" type="textarea" placeholder="" readonly autosize size="small"
          status="warning" />
        <n-tooltip placement="bottom" trigger="click">
          <template #trigger>
            <n-button @click="copy" size="small" class="!ml-4" :text-color="isDark ? '#fff' : '#000'">
              Copy
            </n-button>
          </template>
          <span> Copied Success </span>
        </n-tooltip>
      </div>
    </div>
  </n-config-provider>
</template>
