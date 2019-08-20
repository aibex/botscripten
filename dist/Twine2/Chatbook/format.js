window.storyFormat({
  name: "Chatbook",
  description: "An export friendly version of Chatbook+Twine",
  author: "Jakob Heuser",
  image: "icon.svg",
  url: "github:jakobo/chatbook",
  version: "0.1.0",
  proofing: false,
  source:
    '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8" />\n  </head>\n  <body>\n    <twine>\n      {{STORY_DATA}}\n    </twine>\n    <!-- prettier-ignore -->\n    <script>document.querySelector("tw-passagedata[pid=\'"+document.querySelector("tw-storydata").getAttribute("startnode")+"\']").classList.add("start");</script>\n    <!-- prettier-ignore -->\n    <style>\n      twine,twine * { display: block; font-family: monospace; white-space: pre; }\n      tw-storydata::before {\n        content: ":: StoryTitle\\A"attr(name);\n        color: green;\n      }\n      tw-passagedata::before {\n        content: ":: " attr(name) " [" attr(tags) \']\';\n        color: blue;\n        margin: 1em 0 0 0;\n        display: block;\n        font-weight: bold;\n      }\n      tw-passagedata.start::before {\n        content: "🚀 :: " attr(name) " [" attr(tags) \']\';\n      }\n      tw-passagedata + tw-passagedata {\n        border-top: 1pt dashed black;\n        padding: 1em 0;\n        margin: 1em 0 0 0;\n      }\n    </style>\n  </body>\n</html>\n',
});
