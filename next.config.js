const path = require("path");
const withCSS = require("@zeit/next-css");
const interpolateName = require("loader-utils").interpolateName;
const normalizePath = require("normalize-path");

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    mode: "local",
    localIdentName: "_[hash]",
    getLocalIdent: (context, localIdentName, localName, options) => {
      const request = normalizePath(
        path.relative(options.context || "", context.resourcePath)
      );
      options.content = `${options.hashPrefix + request}+${unescape(
        localName
      )}`;

      if (request.match(/^components\//)) {
        return localName;
      }

      return interpolateName(context, localIdentName, options);
    }
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.js$/,
      use: ["astroturf/loader"]
    });

    return config;
  }
});

function unescape(str) {
  const whitespace = "[\\x20\\t\\r\\n\\f]";
  const unescapeRegExp = new RegExp(
    `\\\\([\\da-f]{1,6}${whitespace}?|(${whitespace})|.)`,
    "ig"
  );

  return str.replace(unescapeRegExp, (_, escaped, escapedWhitespace) => {
    const high = `0x${escaped}` - 0x10000;

    // NaN means non-codepoint
    // Workaround erroneous numeric interpretation of +"0x"
    // eslint-disable-next-line no-self-compare
    return high !== high || escapedWhitespace
      ? escaped
      : high < 0
      ? // BMP codepoint
        String.fromCharCode(high + 0x10000)
      : // Supplemental Plane codepoint (surrogate pair)
        // eslint-disable-next-line no-bitwise
        String.fromCharCode((high >> 10) | 0xd800, (high & 0x3ff) | 0xdc00);
  });
}
