# Points to Note

::: warning 1

The logic of using OhMyMN is different from any previous plugins, especially the modules that begin with "Auto", which have truly achieved full automation. You need to set the conditions for execution and turn on `Auto on Extract` so that it can execute automatically when you need it.  Modules often offer presets. You can choose to use the presets directly, or customize them. OhMyMN does not recommend indiscriminate executions, so there is no global switch to turn OhMyMN on or off with a single click.

:::

::: danger 2

The priority of customization is always the highest in all module presets.

:::

::: warning 3

Do not use notebooks that do not contain documents. OhMyMN can only read configuration information when the a document is being opened.

:::

::: danger 4

OhMyMN can only handle excerpts. Anything you drag in from your browser or type in yourself is viewed as comments.

:::

::: warning 5

Do not use OhMyMN and other plugins that execute automatically during excerpting simultaneously. Conflicts may occur.

:::

::: danger 6

You need to press `Enter` to confirm the custom input, 

The prompt of saving successfully will appear and the input method editor will be cloased. Otherwise, there is an input error.

:::

::: warning 7

Deactivating OhMyMN in the plugin settings will `clear the config`. If an error causes a crash, you can disable and re-enable the plugin. Of course, in most cases there is no need to clear the configuration, since it will be very inconvenient to reset it.

:::

::: danger 8

If you are highlighting content, MN will reacquire the new excerpt content, which will nullify the OhMyMN processing. After highlighting content, you can re-process the excerpt by slightly modifying the excerpt selection.

:::

::: warning 9

After highlighting content, two `*`s will appear on both sides of the highlighted content captured by OhMyMN, e.g. `*This is the highlighted content**`. Please pay extra attention when doing operations such as replacing, filtering, extracting, etc.

:::

::: danger 10

If you can't see the smiley logo after installing the plugin, you can try to re-install it. If it still does not work, then the system version is too low and you can upgrade the system.

:::

::: warning 11

If you want the "Auto" modules to work synchronously, you need to know the order of execution of the modules (top to bottom, left to right). 

1.  AutoOCR
2.  AutoSimplify -> AutoFormat → AutoList → AutoReplace
3.  Three threads in parallel
    - AutoComplete → AnotherAutoDef → AnotherAutoTitle
    - AutoTag
    - AutoComment、AutoTranslate

:::
