# Changelog

# 0.5.0

- **Breaking Changes**
  - Chatbook was renamed to `Botscripten`. `package.json` files will need to reference `@aibex/botscripten` beginning with 0.5.0. This was done to avoid confusion with "Chapbook", the new Twine story format from Twine's creator.

# 0.4.0

- **Breaking Changes**
  - In the chatbook parser, passages are now returned as an object to avoid empty passages at index 0 (twine numbering starts at zero)

**0.3.0 > 0.4.0 Migration Guide** <br>
To migrate to 0.4.0, change any instances where you were looping over `story.passages` to loop instead over `story.passageIndex` and get the object from the passages collection, or iterate over the object keys of passages itself.

```js
// prior
for (const p in story.passages) {
  // ...
}

// new
for (const pid of Object.keys(story.passages)) {
  const p = story.passages[pid];
  // ...
}
```

# 0.3.0

- **Breaking Changes**
  - The `system` tag is removed. Passages are assumed to be system level passages unless a `speaker-*` tag is defined
  - `multiline` is the default behavior. To deliver a large block of text with newlines, use the `oneline` tag
- **Features**
  - "Show Directives" is now enabled by default
- **Documentation Updates**
  - Added clarity to how directives parse. Adding a directive in the middle of a passage will cause unexpected behavior. This is because all directives are extracted and ran _FIRST_. The most common solution to this is to split a passage up, ensuring that the second passage begins with the relevant directive(s).

**0.2.x > 0.3.0 Migration Guide** <br>
To migrate to 0.3.0, you'll want to ensure you have `speaker-*` tags on every line you wish to have a speaker for. Additionally, you will want to add the `oneline` tag to any passages you wish to deliver at once instead of incrementally.

The `system` and `multline` tags can be removed at your leisure.

# 0.2.0

- **Breaking Changes**
  - The `auto` tag is removed, and is assumed to be the default behavior. If you would like to pause the conversation until the user takes an action, you should use the `wait` tag instead.
  - The `prompt-*` tag is removed. If you want to prompt, it's recommended to do so as a directive. This ensures that your Chatbook script is as portable as possible and isn't bound to the constraints of Twine's tag system
- **Features**
  - ChatbookViewer - You can now use the `show directives` option to view any directives you've defined. This uses the same extractor as the npm module

**0.1.1 > 0.2.0 Migration Guide** <br>
To migrate to 0.2.0, you'll want to add a `wait` tag anywhere you intentionally want Chatbook to pause for user input and there was only a single link available. `auto` tags can be cleaned up at your leisure.

You'll also need to replace your `prompt-*` tags with a directive. We recommend `#@prompt saveAsName` which will require minimal code change for any parsers/interpreters that were relying on prompt tags.

# 0.1.1

- **Features**
  - node.js support. Chatbook now has a simple parser for Chatbook-formated Twine2 files.
  - Tests now running via `yarn test`. Currently used to validate the parser is working as-intended
- **Fixes**
  - Removed `chatbook.umd.js` as it's an intermediate file in the twine build
  - Refactored build scripts and `concurrently` output for a cleaner dev console
  - Added Husky + Prettier for consistent JavaScript formatting
- **Other**
  - Twine and npm versions have been separated. Updates to the parser should not reqiure people to consider upgrading their StoryFormat within Twine
  - An Acknowledgements section was added to the readme to specifically thank the prior work that made Chatbook possible. ❤️

# 0.1.0 (intermediate)

Between 0.1.0 and 0.1.1, the `chatbook` repository was transferred to the `aibexhq` organization. Contributors remained the same.

# 0.1.0

- **Breaking Changes**
  - Comments are migrated from JavaScript style `/* ... */` to using Octothorpes `#` / `###`. This allos us to support Directives.
  - Removed support completely for `<% ... %>` to promote Twine file portability
  - Removed markdown support, as markdown implementations are not consistent between JavaScript (marked) and other platforms
- **Features**
  - Directives - Directives allow you to attach meaning to comments for your runtime engine. These statements are the new Octothorpe comment, followed by an `@` sign, followed by the directive. For example, a line of `#@foo bar` in your Twine file would be a comment with the directive `@foo`, and the content `bar`.

# 0.0.1

Initial Release